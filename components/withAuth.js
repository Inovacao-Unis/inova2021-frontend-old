import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import api from '../services/api';

const withAuth = (Component) => (props) => {
  const { setLoading, token } = useAuth();
  const Router = useRouter();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!token) {
      Router.push('/');
      return null;
    }

    console.log('token: ', token);

    const check = async () => {
      const data = await api.get('check', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data?.status === 200) {
        setLoading(false);
        setVerified(true);
      } else {
        setLoading(false);
        Router.push('/');
      }
    };

    return check();
  }, [token, verified]);

  if (verified) {
    return <Component {...props} />;
  }
  return null;
};

export default withAuth;
