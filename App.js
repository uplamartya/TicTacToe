import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/component/Home";
import Splash from "./src/component/Splash";
import Chooser from "./src/component/Chooser";
//StackNavigation
const Root = createStackNavigator({
  Splash: {
    screen: Splash
  },
  Chooser: {
    screen: Chooser
  },

  Home: {
    screen: Home
  }
});

const container = createAppContainer(Root);
export default container;
