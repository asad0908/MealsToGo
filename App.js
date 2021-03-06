import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import RestuarentsScreen from "./src/features/restuarents/screens/restuarents.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/themes";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "./src/components/typography/text.component";
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "./src/components/utility/safe-area.component";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const MapsComponent = () => {
    return (
      <SafeArea
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Maps</Text>
      </SafeArea>
    );
  };

  const SettingsComponent = () => {
    return (
      <SafeArea
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Settings</Text>
      </SafeArea>
    );
  };

  const TAB_ICON = {
    Restuarents: "md-restaurant",
    Maps: "md-map",
    Settings: "md-settings",
  };

  const screenOptions = ({ route }) => {
    return {
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName = TAB_ICON[route.name];
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restuarents" component={RestuarentsScreen} />
            <Tab.Screen name="Maps" component={MapsComponent} />
            <Tab.Screen name="Settings" component={SettingsComponent} />
          </Tab.Navigator>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
