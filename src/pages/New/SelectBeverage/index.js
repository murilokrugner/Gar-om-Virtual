import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';

import { Image, TouchableOpacity, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import Background from '../../../components/Background';

import { Container, EmployeeList, Employee, Name } from './styles';

import api from '../../../services/api';

import Beverage from '../../../animations/beverage.json';

import Bebida from '../../../assets/bebida.png';

export default function SelectBeverage({ navigation }) {
  const employee = navigation.getParam('employee');
  const table = navigation.getParam('table');
  const dish = navigation.getParam('dish');

  const [beverage, setBeverage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEmployee() {
      setLoading(true);
      const response = await api.get('/Bebidas');

      console.tron.log(response);

      setBeverage(response.data);

      setLoading(false);
    }

    loadEmployee();
  }, []);

  return (
    <Background>
      <Container>
        {loading ? (
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Lottie resizeMode="contain" source={Beverage} autoPlay />
          </SafeAreaView>
        ) : (
          <EmployeeList
            data={beverage}
            keyExtractor={beverage => String(beverage.id)}
            renderItem={({ item: beverage }) => (
              <Employee
                onPress={() =>
                  navigation.navigate('Confirm', {
                    employee,
                    table,
                    dish,
                    beverage,
                  })
                }
              >
                <Image style={{ width: 50, height: 50 }} source={Bebida} />
                <Name>{beverage.nome}</Name>
              </Employee>
            )}
          />
        )}
      </Container>
    </Background>
  );
}

SelectBeverage.navigationOptions = ({ navigation }) => ({
  title: 'Selecione a bebida',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectDish');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
