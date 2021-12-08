import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestuarentInfoComponent from "../components/restuarent-info.component";

const RestuarentScreenContainer = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestuarentSearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestuarentHotelView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

const RestuarentsScreen = () => {
  return (
    <RestuarentScreenContainer>
      <RestuarentSearchView>
        <Searchbar placeholder="Search" />
      </RestuarentSearchView>
      <RestuarentHotelView>
        <RestuarentInfoComponent />
      </RestuarentHotelView>
    </RestuarentScreenContainer>
  );
};

export default RestuarentsScreen;
