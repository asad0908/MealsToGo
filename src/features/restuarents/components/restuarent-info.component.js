import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Image, Text, View } from "react-native";
import Spacer from "../../../components/spacer/spacer.component";

const RestuarentCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurentCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestuarentCardTitle = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RatingLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RatingRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RestuarentInfoComponent = ({ restuarent = {} }) => {
  const {
    name = "Foodies Feed",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restuarent;

  const ratingArray = Array.from(new Array(4));

  return (
    <RestuarentCard elevation={5}>
      <RestaurentCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <RestuarentCardTitle>{name}</RestuarentCardTitle>
        <Rating>
          <RatingLeft>
            {ratingArray.map((value, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </RatingLeft>
          <RatingRight>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red", fontSize: 11 }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer varient="left.large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer varient="left.large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </RatingRight>
        </Rating>
        <Address>{address}</Address>
      </Card.Content>
    </RestuarentCard>
  );
};

export default RestuarentInfoComponent;
