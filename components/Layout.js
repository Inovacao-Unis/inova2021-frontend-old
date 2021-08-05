import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import withAuth from './withAuth';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const bgColor = useColorModeValue('#F4F6F8', '#1A202C');

  return (
    <Box bgColor={bgColor} minH="100vh">
      <Flex flexDirection="column" w="100%">
        <Header />
        {children}
        <Footer />
      </Flex>
    </Box>
  );
}

export default withAuth(Layout);
