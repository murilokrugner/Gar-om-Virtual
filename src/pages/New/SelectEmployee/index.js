import React, { useEffect, useState } from 'react';

import { Image, TouchableOpacity, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import Background from '../../../components/Background';

import { Container, EmployeeList, Employee, Name } from './styles';

import api from '../../../services/api';

import Burger from '../../../animations/burger.json';

export default function SelectEmployee({ navigation }) {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.tron.log(response.data);

  useEffect(() => {
    async function loadEmployee() {
      setLoading(true);
      const response = await api.get('/atendente');

      setEmployee(response.data);
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
            data={employee}
            keyExtractor={employee => String(employee.id)}
            renderItem={({ item: employee }) => (
              <Employee
                onPress={() => navigation.navigate('SelectTable', { employee })}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: employee.img,
                  }}
                />
                <Name>{employee.nome}</Name>
              </Employee>
            )}
          />
        )}
      </Container>
    </Background>
  );
}

SelectEmployee.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o atendente',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Main');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
