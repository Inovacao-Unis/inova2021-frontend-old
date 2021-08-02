import { Center, Flex, Heading } from '@chakra-ui/react';
import SigIn from 'src/components/SignIn';

export default function Login() {
  return (
    <Center h="80vh">
      <Flex direction="column" align="center">
        <Heading mb="5">Inova 2021</Heading>
        <SigIn />
      </Flex>
    </Center>
  );
}
