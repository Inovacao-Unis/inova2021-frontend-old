import {
  Flex,
  Container,
  Box,
  Heading,
  Spacer,
  Button,
  Center,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import firebase from '../lib/firebase';

export default function Header() {
  const Router = useRouter();

  return (
    <Box borderBottom="1px" borderColor="gray.700" py="10px">
      <Container maxW="container.xl">
        <Flex>
          <Center cursor="pointer" onClick={() => Router.push('/')}>
            <Heading size="md">Inova 2021</Heading>
          </Center>
          <Spacer />
          <Flex align="center">
            <Text mr="3rem">Sobre o jogo</Text>
            <Button
              onClick={async () => {
                await firebase.auth().signOut();
                window.location.href = '/login';
              }}
            >
              Sair
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
