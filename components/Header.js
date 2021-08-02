import {
  Flex,
  Container,
  Box,
  Heading,
  Spacer,
  Button,
} from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';

export default function Header() {
  const { signout } = useAuth();

  return (
    <header>
      <Container maxW="container.xl">
        <Flex>
          <Box p="2">
            <Heading size="md">Inova 2021</Heading>
          </Box>
          <Spacer />
          <Box>
            <Button onClick={signout}>Sair</Button>
          </Box>
        </Flex>
      </Container>
    </header>
  );
}
