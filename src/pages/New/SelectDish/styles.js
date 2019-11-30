import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const EmployeeList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Employee = styled(RectButton)`
  flex: 1;
  background: #401b00;
  border-radius: 4px;
  align-items: center;
  margin: 0 10px 20px;
  padding: 20px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  align-items: center;
`;
