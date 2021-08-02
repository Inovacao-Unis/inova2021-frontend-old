import { Box, Container, Text } from '@chakra-ui/react';
import Layout from 'src/components/Layout';
import withAuth from 'src/components/withAuth';

const Home = () => (
  <Layout>
    <Box>
      <Container>
        <Text>TExto inicial aqui</Text>
      </Container>
    </Box>
  </Layout>
);

export default withAuth(Home);
