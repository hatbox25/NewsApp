/**
 * Created by EdwinLokyta on 26/09/2017.
 */
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Spinner,View } from "native-base";

class SpinnerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dimensions: Dimensions.get('window'),
        };
    }

    getCenterHeight(height){
        var center = (this.state.dimensions.height / 2) - (height / 2);
        return center;
    }

    getCenterWidth(width){
        var center = (this.state.dimensions.width / 2) - (width / 2);
        return center;
    }

    getPosition(){
        // get position spinner
        switch(this.props.type){
            case "list":
                return {};
                break;
            case "not_everflay":
                return {paddingLeft:this.getCenterWidth(50)};
                break;
            default:
                return {paddingTop:this.getCenterHeight(50)};
                break;
        }
    }

    render() {
        return (
            <View>
                <Spinner color='black' style={this.getPosition()} />
            </View>
        )
    }
}

export default SpinnerComponent