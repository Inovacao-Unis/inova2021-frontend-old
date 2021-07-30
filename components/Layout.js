import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import withAuth from 'src/components/withAuth';
import useAuth from 'src/hooks/useAuth';
import firebase from '../lib/firebase';
import api from '../services/api';

function Layout({ children }) {
  const bgColor = useColorModeValue('#F4F6F8', '#1A202C');
  const { user } = useAuth();

  return (
    <Box bgColor={bgColor} minH="100vh">
      <Flex flexDirection="column" pt="62px">
        {children}
      </Flex>
    </Box>
  );
}

export default withAuth(Layout);
