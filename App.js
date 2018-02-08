import React from 'react';

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
        return <AppNavigator/>;
    }
}
