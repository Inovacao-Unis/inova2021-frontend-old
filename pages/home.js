import { Box, Container, Text } from '@chakra-ui/react';
import Layout from 'src/components/Layout';
import withAuth from 'src/components/withAuth';
import Short from 'src/components/Short';

const Home = () => (
  <Layout>
    <Box>
      <Container maxW="container.xl">
        <Text>Página de teste</Text>
        <Short formId="610848c917413726624c2892" />
      </Container>
    </Box>
  </Layout>
);

export default withAuth(Home);
