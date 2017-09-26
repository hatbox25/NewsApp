/**
 * Created by EdwinLokyta on 25/09/2017.
 */
import React from 'react';
import {
    Header,
    Text,
    Row,
    Col,
    View,
    Button,
    Icon
} from 'native-base';
import styles from '../../assets/styles';
export default class CompHeader extends React.Component{
    constructor(props) {
        super(props);
    }

    showBack(){
        const {props} = this;
        if(props.back){
            return (
                <Button style={{marginLeft:-10,paddingRight:0}} transparent onPress={() => props.navigation.goBack()}>
                    <Icon style={{color:'#fff'}} name="arrow-back"/>
                </Button>
            );
        }
    }

    render(){
        const {title} = this.props;
        return(
            <Header androidStatusBarColor="#424242"
                    style={styles.header}
            >
                <Row>
                    <Col size={10}  style={{justifyContent: 'center'}}>
                        <View>
                            {this.showBack()}
                        </View>
                    </Col>
                    <Col size={80}  style={{justifyContent: 'center'}}>
                        <View>
                            <Text style={styles.title_header}>{title}</Text>
                        </View>
                    </Col>
                    <Col size={10}  style={{justifyContent: 'center'}}>
                        <View>
                            
                        </View>
                    </Col>
                </Row>
                
            </Header>
        )
    }
}