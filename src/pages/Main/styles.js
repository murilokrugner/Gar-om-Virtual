import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Home = styled.Text`
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonPress = styled(Button)`
  width: 200px;
  height: 70px;
`;
