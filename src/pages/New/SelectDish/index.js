import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';

import { Image, TouchableOpacity, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import Background from '../../../components/Background';

import { Container, EmployeeList, Employee, Name } from './styles';

import api from '../../../services/api';

import Burger from '../../../animations/burger.json';

import Prato from '../../../assets/prato.jpg';

export default function SelectDish({ navigation }) {
  const employee = navigation.getParam('employee');
  const table = navigation.getParam('table');

  const [dish, setDish] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEmployee() {
      setLoading(true);
      const response = await api.get('/Pratos');

      console.tron.log(response);

      setDish(response.data);

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
            <Lottie resizeMode="contain" source={Burger} autoPlay />
          </SafeAreaView>
        ) : (
          <EmployeeList
            data={dish}
            keyExtractor={dish => String(dish.id)}
            renderItem={({ item: dish }) => (
              <Employee
                onPress={() =>
                  navigation.navigate('SelectBeverage', {
                    employee,
                    table,
                    dish,
                  })
                }
              >
                <Image style={{ width: 50, height: 50 }} source={Prato} />
                <Name>{dish.nome}</Name>
              </Employee>
            )}
          />
        )}
      </Container>
    </Background>
  );
}

SelectDish.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prato',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectTable');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
