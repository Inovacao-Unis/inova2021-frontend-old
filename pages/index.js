import { Center, Flex, Heading, Button } from '@chakra-ui/react';
import SigIn from 'src/components/SignIn';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  function redirectToLogin() {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', '/');
      router.reload();
    }
  }

  return (
    <Center h="80vh">
      <Flex direction="column" align="center">
        <Heading mb="5">Inova 2021</Heading>
        <SigIn />
        <Button onClick={() => redirectToLogin()}>Login</Button>
      </Flex>
    </Center>
  );
}
