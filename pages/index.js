import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Text, Circle, Flex } from '@chakra-ui/react';
import Layout from '@components/Layout';
import withAuth from '@components/withAuth';

const Home = () => {
  const [open, setOpen] = useState(false);
  const Router = useRouter();

  return (
    <Layout>
      <Container maxW="container.xl">
        <Flex pt={4}>
          <Flex w="100%" flexDirection="column" align="center" flex="1">
            <Flex
              onClick={() => Router.push('/desafio/problema')}
              cursor="pointer"
              mr="auto"
              ml="180px"
            >
              <Circle size="180px" bg={true ? 'tomato' : 'gray'} color="white">
                <Text>Desafio 1</Text>
              </Circle>
            </Flex>
            <Flex cursor="pointer" mr="180px" ml="auto">
              <Circle size="210px" bg={false ? 'tomato' : 'gray'} color="white">
                <Text>Desafio 2</Text>
              </Circle>
            </Flex>
            <Flex cursor="pointer" mr="auto" ml="180px">
              <Circle size="190px" bg={false ? 'tomato' : 'gray'} color="white">
                <Text>Desafio 3</Text>
              </Circle>
            </Flex>
            <Flex cursor="pointer" mr="180px" ml="auto">
              <Circle size="200px" bg={false ? 'tomato' : 'gray'} color="white">
                <Text>Desafio 4</Text>
              </Circle>
            </Flex>
            <Flex cursor="pointer" mx="auto" mt="80px">
              <Circle size="250px" bg={false ? 'tomato' : 'gray'} color="white">
                <Text>Desafio Final</Text>
              </Circle>
            </Flex>
          </Flex>
          <Box w="430px">
            <Box
              border="1px"
              borderColor="gray.600"
              borderRadius="md"
              ml="24px"
              p="24px"
              textAlign="center"
            >
              <Text fontSize="xl" mb={4}>
                Ranking
              </Text>
              <Text mb={2}>Time 1</Text>
              <Text mb={2}>Time 2</Text>
              <Text mb={2}>Time 3</Text>
              <Text mb={2}>Time 4</Text>
              <Text mb={2}>Time 5</Text>
              <Text mb={2}>Time 6</Text>
              <Text mb={2}>Time 7</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default withAuth(Home);
