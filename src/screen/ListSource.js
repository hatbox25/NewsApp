/**
 * Created by EdwinLokyta on 25/09/2017.
 */
import React from 'react';
import {
    Alert
} from 'react-native';
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Card,
    CardItem,
    Row
} from 'native-base';
import Spinner from '../component/Spinner';
import CompHeader from '../component/Header';
import styles from '../../assets/styles';
import axios from 'axios';
export default class ListSourceScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listSource:[],
            loading:true
        }
    }

    componentWillMount(){
        const {params} = this.props.navigation.state;
        var instance = axios.create({
            timeout: 30000,
        });

        instance.get('https://newsapi.org/v1/sources',{
            params:{
                language:'en',
                category:params.category
            }
        }).then(resp => {
            const listSource = resp.data.sources;
            this.setState({listSource});
            this.setState({loading:false});
        }).catch(function (error) {
            console.log(error);
            Alert.alert("Request Time Out");
        }.bind(this));
    }

    truncateStr(str){
        if(160 < str.length){
            return str.substring(0,160) + ' ...';
        }else return str;
    }

    renderList(){
        if(this.state.listSource.length){
            return(
                <List
                    dataArray={this.state.listSource}
                    renderRow={(item) =>
                    <ListItem style={{backgroundColor:'#6d6d6d',borderBottomWidth:0,margin : 2}}
                        button={true}
                        onPress={()=>{
                            this.props.navigation.navigate('Article',{source:item.id,sourceName:item.name});
                        }}
                        >
                        <Row>
                            <Card>
                                <CardItem header style={{backgroundColor:'#1b1b1b'}}>
                                    <Text style={{color:'#fff'}}>{item.name}</Text>
                                </CardItem>
                                <CardItem cardBody style={{margin:10}}>
                                    <Text>{this.truncateStr(item.description)}</Text>
                                </CardItem>
                            </Card>
                        </Row>
                    </ListItem>
                }
                >
                </List>
            )
        }
    }

    render() {
        const {params} = this.props.navigation.state;
        if(this.state.loading) return <Spinner />;
        return (
            <Container style={styles.container}>
                <CompHeader title={"Sources list for category "+params.category} {...this.props} back="true"/>
                <Content style={{backgroundColor:'#6d6d6d'}}>
                    {this.renderList()}
                </Content>
            </Container>
        );
    }
}