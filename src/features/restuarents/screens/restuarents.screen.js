import React from "react";
import { FlatList, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestuarentInfoComponent from "../components/restuarent-info.component";

const RestuarentSearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestuarentList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const RestuarentsScreen = () => {
  return (
    <SafeArea>
      <RestuarentSearchView>
        <Searchbar placeholder="Search" />
      </RestuarentSearchView>
      <RestuarentList
        data={[{ name: "Fooding" }, { name: "Foodings" }, { name: "3" }]}
        renderItem={() => <RestuarentInfoComponent />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestuarentsScreen;
