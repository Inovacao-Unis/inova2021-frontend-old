import { useEffect } from 'react';
import firebase from 'src/lib/firebase';
import useAuth from 'src/hooks/useAuth';
import Router from 'next/router';
import api from '../services/api';
import 'firebaseui/dist/firebaseui.css';

const SigIn = () => {
  const { handleUser, token } = useAuth();

  const configUi = {
    callbacks: {
      signInSuccessWithAuthResult: (authResult) => {
        handleUser(authResult.user);
      },
    },
    signInFlow: 'popup',
    signInSuccessUrl: '/home',
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    tosUrl: '/politica-de-privacidade',
    privacyPolicyUrl: '/politica-de-privacidade',
  };

  useEffect(() => {
    const check = async () => {
      if (token) {
        const data = await api.get('check', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (data?.status === 200) {
          Router.push('/home');
          return null;
        }
      }

      if (firebase.auth()) {
        const firebaseui = await import('../npm__pt_br');
        if (!firebaseui.auth.AuthUI.getInstance()) {
          const ui = new firebaseui.auth.AuthUI(firebase.auth());
          ui.start('#firebaseui', configUi);
        }
      } else {
        Router.push('/error');
      }

      return null;
    };

    return check();
  }, [token]);

  return <div id="firebaseui" />;
};

export default SigIn;
