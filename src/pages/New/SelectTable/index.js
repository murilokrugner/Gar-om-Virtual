import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';

import { Image, TouchableOpacity, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import Background from '../../../components/Background';

import { Container, EmployeeList, Employee, Name } from './styles';

import api from '../../../services/api';

import Beverage from '../../../animations/beverage.json';

import TableLogo from '../../../assets/mesa.jpg';

export default function SelectTable({ navigation }) {
  const employee = navigation.getParam('employee');

  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEmployee() {
      setLoading(true);
      const response = await api.get('/mesas');

      console.tron.log(response);

      setTable(response.data);

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
            data={table}
            keyExtractor={table => String(table.id)}
            renderItem={({ item: table }) => (
              <Employee
                onPress={() =>
                  navigation.navigate('SelectDish', { employee, table })
                }
              >
                <Image style={{ width: 50, height: 50 }} source={TableLogo} />
                <Name>{table.nome}</Name>
              </Employee>
            )}
          />
        )}
      </Container>
    </Background>
  );
}

SelectTable.navigationOptions = ({ navigation }) => ({
  title: 'Selecione a mesa',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectEmployee');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
