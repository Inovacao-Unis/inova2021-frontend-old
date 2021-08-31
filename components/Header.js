import {
  Flex,
  Container,
  Box,
  Image,
  Spacer,
  List,
  ListItem,
  Center,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  MenuDivider,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import firebase from '../lib/firebase';

export default function Header() {
  const Router = useRouter();

  return (
    <Box borderBottom="solid 0.5px rgba(255, 255, 255, 0.13)" py="10px">
      <Container maxW="container.xl">
        <Flex>
          <Center cursor="pointer" onClick={() => Router.push('/')}>
            <Box maxWidth="150">
              <Image src="/images/logo.png" alt="Logo UaiInovei" />
            </Box>
          </Center>
          <Spacer />
          <Flex align="center">
            <Text mr="3rem">Sobre o jogo</Text>
            <Popover>
              <PopoverTrigger>
                <BellIcon mr="1.5rem" w={8} h={8} cursor="pointer" />
              </PopoverTrigger>
              <PopoverContent mt="2" color="gray.600" borderColor="#fff">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight="bold">Notificações</PopoverHeader>
                <PopoverBody>
                  <List>
                    <ListItem fontSize=".9rem" py=".8rem">
                      Você completou sua jornada!
                    </ListItem>
                    <ListItem fontSize=".9rem" py=".8rem">
                      Você ganhou 30 pontos!
                    </ListItem>
                    <ListItem fontSize=".9rem" py=".8rem">
                      Você ganhou 20 pontos!
                    </ListItem>
                    <ListItem fontSize=".9rem" py=".8rem">
                      Você ganhou 30 pontos!
                    </ListItem>
                    <ListItem fontSize=".9rem" py=".8rem">
                      Você ganhou 20 pontos!
                    </ListItem>
                    <ListItem fontSize=".9rem" py=".8rem">
                      Você começou uma nova jornada!
                    </ListItem>
                  </List>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Menu>
              <MenuButton>
                <Avatar name="Nome perfil" src="https://bit.ly/dan-abramov" />
              </MenuButton>
              <MenuList>
                <MenuItem color="pink">
                  <Link href="/minha-conta">
                    <a>Minhas Jornadas</a>
                  </Link>
                </MenuItem>
                <MenuItem color="pink">Perfil</MenuItem>
                <MenuItem color="pink">Configurações</MenuItem>
                <MenuItem
                  color="pink"
                  onClick={async () => {
                    await firebase.auth().signOut();
                    window.location.href = '/login';
                  }}
                >
                  Sair
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
