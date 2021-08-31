import Layout from '@components/Layout';
import withAuth from '@components/withAuth';
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

const minhaConta = () => (
  <Layout>
    <Text>minhas jornadas</Text>
  </Layout>
);

export default withAuth(minhaConta);
