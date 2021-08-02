import { useEffect } from 'react';
import useAuth from 'src/hooks/useAuth';
import { Button } from '@chakra-ui/react';
import SigIn from 'src/components/SignIn';

export default function Login() {
  const { signout } = useAuth();

  useEffect(async () => {
    // const data = await api.get('check');
    // if (data?.status === 200) {
    //   Router.push('/home');
    // }
  }, []);

  return (
    <div>
      <SigIn />
      <Button onClick={signout}>Logout</Button>
    </div>
  );
}
