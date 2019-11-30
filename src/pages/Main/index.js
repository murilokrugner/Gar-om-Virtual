import React from 'react';
import { Image } from 'react-native';

import Background from '../../components/Background';

import { Container, Home, ButtonPress } from './styles';

import Logo from '../../assets/simbolus.png';

export default function Main({ navigation }) {
  return (
    <Background>
      <Container>
        <Home>Bem vindo!</Home>
        <Image source={Logo} style={{ width: 350, height: 200 }} />
        <ButtonPress onPress={() => navigation.navigate('SelectEmployee')}>
          Fazer pedido
        </ButtonPress>
      </Container>
    </Background>
  );
}
