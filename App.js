import React from 'react';
import Expo from 'expo';

import AppNavigator from './src/AppNavigator';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            fontsAreLoaded: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({fontsAreLoaded: true});

        // To see all the requests in the chrome Dev tools in the network tab.
        XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
            GLOBAL.originalXMLHttpRequest :
            GLOBAL.XMLHttpRequest;

        // fetch logger
        global._fetch = fetch;
        global.fetch = function (uri, options, ...args) {
            return global._fetch(uri, options, ...args).then((response) => {
                //console.log('Fetch', { request: { uri, options, ...args }, response });
                return response;
            });
        };
    }

    render() {
        if (!this.state.fontsAreLoaded) {
            return <Expo.AppLoading/>
        }
        return <AppNavigator/>;
    }
}
