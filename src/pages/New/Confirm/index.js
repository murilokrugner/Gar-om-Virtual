import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/Background';
import {
  Container,
  Order,
  Employee,
  Table,
  Dish,
  Beverage,
  SubmitButton,
} from './styles';

export default function Confirm({ navigation }) {
  const employee = navigation.getParam('employee');
  const table = navigation.getParam('table');
  const dish = navigation.getParam('dish');
  const beverage = navigation.getParam('beverage');

  async function confirm() {
    navigation.navigate('Main', {});
    Alert.alert('Pedido Efetuado!');
  }

  return (
    <Background>
      <Container>
        <Order>
          <Employee>Atendente: {employee.nome}</Employee>
          <Table>Localização: {table.nome}</Table>
          <Dish>Prato: {dish.nome}</Dish>
          <Beverage>Bebida: {beverage.nome}</Beverage>
        </Order>

        <SubmitButton onPress={confirm}>Confirmar</SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar pedido',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
