import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Header from "../shared/Header";
import React from "react";

// assign object to component
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  // show default styles in every nav
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
    },
  },
});

export default AboutStack;
