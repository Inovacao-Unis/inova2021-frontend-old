import { createContext, useState, useEffect } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import firebase from '../lib/firebase';
import api from '../services/api';

const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const setSession = (session) => {
    if (session) {
      Cookies.set('itka', session, {
        expires: 1,
      });
    } else {
      Cookies.remove('itka');
    }
  };

  const handleUser = async (currentUser) => {
    if (currentUser) {
      const getToken = await firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true);
      setToken(getToken);
      const formatedUser = await formatUser(currentUser);
      setUser(formatedUser);
      setSession(true);
      return formatedUser.email;
    }
    setUser(false);
    setSession(false);
    return false;
  };

  const signout = async () => {
    try {
      Router.push('/');
      await firebase.auth().signOut();
      handleUser(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        handleUser,
        setLoading,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;