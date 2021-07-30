import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import Cookies from 'js-cookie';
import firebase from '../lib/firebase';
import api from '../services/api';

const withAuth = (Component) => (props) => {
  const { setLoading } = useAuth();
  const Router = useRouter();
  const [verified, setVerified] = useState(false);

  useEffect(async () => {
    const getToken = async () => {
      await firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          await firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(async (res) => {
              const data = await api.get('check', {
                headers: {
                  Authorization: `Bearer ${res}`,
                },
              });
              if (data?.status === 200) {
                setLoading(false);
                setVerified(true);
              } else {
                setLoading(false);
                Router.push('/');
              }
            });
          // ...
        } else {
          setLoading(false);
          Router.push('/');
          // User is signed out
          // ...
        }
      });
    };

    getToken();
  }, [verified]);

  if (verified) {
    return <Component {...props} />;
  }
  return null;
};

export default withAuth;
