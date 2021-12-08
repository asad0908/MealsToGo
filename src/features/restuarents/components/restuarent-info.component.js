import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestuarentCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurentCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestuarentCardTitle = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestuarentInfoComponent = ({ restuarent = {} }) => {
  const {
    name = "Foodies Feed",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restuarent;

  return (
    <RestuarentCard elevation={5}>
      <RestaurentCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <RestuarentCardTitle>{name}</RestuarentCardTitle>
      </Card.Content>
    </RestuarentCard>
  );
};

export default RestuarentInfoComponent;
