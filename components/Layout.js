import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import withAuth from 'src/components/withAuth';
import Header from './Header';

function Layout({ children }) {
  const bgColor = useColorModeValue('#F4F6F8', '#1A202C');

  return (
    <Box bgColor={bgColor} minH="100vh">
      <Flex flexDirection="column" w="100%" pt="3">
        <Header />
        {children}
      </Flex>
    </Box>
  );
}

export default withAuth(Layout);
