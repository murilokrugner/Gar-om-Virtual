import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Main from './pages/Main';

import SelectEmployee from './pages/New/SelectEmployee';
import SelectTable from './pages/New/SelectTable';
import SelectDish from './pages/New/SelectDish';
import SelectBeverage from './pages/New/SelectBeverage';
import Confirm from './pages/New/Confirm';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      New: {
        screen: createStackNavigator(
          {
            SelectEmployee,
            SelectTable,
            SelectDish,
            SelectBeverage,
            Confirm,
          },
          {
            defaultNavigationOptions: {
              headerTransparent: true,
              headerTintColor: '#FFF',
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
            },
          }
        ),
        navigationOptions: {
          tabBarVisible: false,
          tabBarLabel: 'Agendar Cliente',
          tabBarIcon: (
            <Icon
              name="add-circle-outline"
              size={20}
              color="rgba(255, 255, 255, 0.6)"
            />
          ),
        },
      },
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          background: '#381A00',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
