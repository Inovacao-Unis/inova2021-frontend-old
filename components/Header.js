import {
  Flex,
  Container,
  Box,
  Heading,
  Spacer,
  Button,
  Center,
} from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';

export default function Header() {
  const { signout } = useAuth();

  return (
    <header>
      <Container maxW="container.xl">
        <Flex>
          <Center>
            <Heading size="md">Inova 2021</Heading>
          </Center>
          <Spacer />
          <Box>
            <Button onClick={signout}>Sair</Button>
          </Box>
        </Flex>
      </Container>
    </header>
  );
}
