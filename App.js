import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import RestuarentsScreen from "./src/features/restuarents/screens/restuarents.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/themes";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarentsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
