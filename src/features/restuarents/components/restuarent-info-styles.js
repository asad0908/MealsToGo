import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestuarentCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurentCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RatingLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RatingRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 15px;
  height: 15px;
`;
