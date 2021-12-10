import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestuarentCard,
  RestaurentCardCover,
  Address,
  Rating,
  RatingLeft,
  RatingRight,
  ImageIcon,
} from "./restuarent-info-styles";

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
        <Text variant="label">{name}</Text>
        <Rating>
          <RatingLeft>
            {ratingArray.map((value, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </RatingLeft>
          <RatingRight>
            {isClosedTemporarily && (
              <Text variant="error" style={{ color: "red", fontSize: 12.5 }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <ImageIcon source={{ uri: icon }} />
            </Spacer>
          </RatingRight>
        </Rating>
        <Address>{address}</Address>
      </Card.Content>
    </RestuarentCard>
  );
};

export default RestuarentInfoComponent;
