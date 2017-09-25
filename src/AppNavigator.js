import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import HomeScreen from './screen/Home';
import SourceScreen from './screen/ListSource';

const AppNavigator = StackNavigator(
    {
        Home:{screen:HomeScreen},
        Source:{screen:SourceScreen}
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    }
);

export default () =>
<Root>
    <AppNavigator/>
</Root>