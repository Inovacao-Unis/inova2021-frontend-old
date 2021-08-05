import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useAuth } from '@contexts/AuthContext';
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading,
  CircularProgress,
  useToast,
} from '@chakra-ui/react';
import firebase from '@lib/firebase';
import firebaseErrors from '@utils/firebaseErrors';
import api from '../services/api';

export default function Login() {
  const toast = useToast();
  const Router = useRouter();
  const { loading, setLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const token = Cookies.get('itka');

    if (!token) {
      setLoading(false);
      return null;
    }

    const check = async () => {
      await api.get('check').then(() => {
        setLoading(false);
        window.location.href = '/';
      });
    };

    return check();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoading(false);
        window.location.href = '/';
      })
      .catch((error) => {
        setIsLoading(false);
        const message = firebaseErrors[error.code];
        toast({
          title: 'Ocorreu um erro.',
          description: message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex>
      <Box w={500} p={4} my={12} mx="auto">
        <Heading textAlign="center" as="h2">
          Login
        </Heading>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl isRequired id="email">
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              mb={4}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired id="password">
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              mb={4}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" width="full">
            {isLoading ? (
              <CircularProgress isIndeterminate size="24px" color="teal" />
            ) : (
              'Enviar'
            )}
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
