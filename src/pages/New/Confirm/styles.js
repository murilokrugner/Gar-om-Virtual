import styled from 'styled-components/native';
import Button from '../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: space-around;
  align-items: center;
`;

export const Order = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: 80px;
  margin-bottom: 40px;
  width: 320px;
  border-radius: 8px;
  background-color: #401b00;
`;

export const Employee = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
`;

export const Table = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: #fff;
`;

export const Dish = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Beverage = styled.Text`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 5px;
  margin-bottom: 30px;
`;
