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
        authResult.user.getIdToken().then((idToken) => {
          // Session login endpoint is queried and the session cookie is set.
          // CSRF protection should be taken into account.
          // ...
          const csrfToken = Cookies.get('csrfToken');
          return api
            .post('sessionLogin', {
              idToken,
              csrfToken,
            })
            .then(async (res) => api.get('check'));
        });
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
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
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
