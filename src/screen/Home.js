/**
 * Created by EdwinLokyta on 25/09/2017.
 */
import React from 'react';
import {
    Alert,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Container,
    Content,
    Text,
    Row,
    Col,
    Card,
    CardItem,
    Body,
    Left,
    Icon
} from 'native-base';
import CompHeader from '../component/Header';
import styles from '../../assets/styles';
export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }

    gotoPage(page) {
        const {navigate} = this.props.navigation;
        Alert.alert('Category ' + page + ' selected !');
        navigate('Source', {category: page});
    }


    render() {
        return (
            <Container style={styles.container}>
                <CompHeader title="My Hoby's News" {...this.props}/>
                <Content>
                    <Row style={styles.row}>
                        <Text>Select Category That You Desired !</Text>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity onPress={() => {this.gotoPage('technology')}}>
                            <Card>
                                <CardItem header>
                                    <Left>
                                        <Icon name="laptop"/>
                                        <Text>Technology</Text>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Body>
                                        <Image
                                            style={styles.cardimg}
                                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Kx359Ly_9MMbkgIa7yT7UP7bdX6oKNYcnZt5uT6zRFCKj8VIMg"}}
                                            resizeMode="cover"
                                        />
                                    </Body>
                                </CardItem>
                            </Card>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity onPress={() => {Alert.alert('hi');}}>
                                <Card>
                                    <CardItem header>
                                        <Left>
                                            <Icon name="paper-plane"/>
                                            <Text>Gaming</Text>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Body>
                                        <Image
                                            style={styles.cardimg}
                                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfrXE3M_c7tlcrUc326k1CbpRA9SZi2p49H6TOwX69xc6Bneq"}}
                                            resizeMode="cover"
                                        />
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity onPress={() => {Alert.alert('hi');}}>
                                <Card>
                                    <CardItem header>
                                        <Left>
                                            <Icon name="play"/>
                                            <Text>Music</Text>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Body>
                                        <Image
                                            style={styles.cardimg}
                                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qMZ4nopE86OPK_edChiMW1_KickD35GZkwoYLxIKFJmWKV3qxA"}}
                                            resizeMode="cover"
                                        />
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity onPress={() => {Alert.alert('hi');}}>
                                <Card>
                                    <CardItem header>
                                        <Left>
                                            <Icon name="leaf"/>
                                            <Text>Science</Text>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Body>
                                        <Image
                                            style={styles.cardimg}
                                            source={{uri:"http://images.gmanews.tv/v3/webpics/v3/2014/07/2014_07_07_16_41_13.jpg"}}
                                            resizeMode="cover"
                                        />
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Content>
            </Container>
        );
    }
}