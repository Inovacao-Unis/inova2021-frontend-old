import Layout from '@components/Layout';
import withAuth from '@components/withAuth';
import Link from 'next/link';
import {
  Container,
  Heading,
  Flex,
  Grid,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

const minhaConta = () => (
  <Layout>
    <Container maxW="container.xl">
      <Heading
        fontSize="2.5rem"
        fontWeight="700"
        textAlign="center"
        m="100px auto"
      >
        minhas jornadas
      </Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(275px, 300px))"
        gap="100px"
      >
        <Link href="/">
          <Flex
            direction="column"
            justify="center"
            align="center"
            textAlign="center"
            borderRadius="10px"
            mt="10px"
            mb="80px"
            mx="auto"
            bgColor="white"
            color="black"
            cursor="pointer"
          >
            <Image
              src="https://loja.belasartes.br/portal-ecom/wp-content/uploads/2020/03/Startup-Thinking-scaled.jpg"
              alt="Imagem da jornada"
              borderRadius="10px 10px 0 0"
              minH="196px"
            />
            <Flex direction="column" p="40px">
              <Text
                fontSize="1.4rem"
                lineHeight="20px"
                fontWeight="700"
                mb="16px"
              >
                Design Thinking
              </Text>
              <Text lineHeight="130%" mb="16px" minH="64px" maxH="8rem">
                Uma jornada incrível para desenvolver sua Startup
              </Text>
              <Button
                bgColor="highlight"
                color="white"
                _hover={{ bg: 'highlight' }}
              >
                Acessar
              </Button>
            </Flex>
          </Flex>
        </Link>
      </Grid>
    </Container>
  </Layout>
);

export default withAuth(minhaConta);
