import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import HomeScreen from './screen/Home';
import SourceScreen from './screen/ListSource';
import ArticleScreen from './screen/ListArticles';
import ViewScreen from './screen/ViewArticle';

const AppNavigator = StackNavigator(
    {
        Home:{screen:HomeScreen},
        Source:{screen:SourceScreen},
        Article:{screen:ArticleScreen},
        View:{screen:ViewScreen}
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