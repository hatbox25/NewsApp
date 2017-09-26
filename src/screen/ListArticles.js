/**
 * Created by EdwinLokyta on 26/09/2017.
 */
import React from 'react';
import {
    Alert,
    Image
} from 'react-native';
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Card,
    CardItem,
    Row,
    Col,
    View,
    Icon,
    Input,
    Item,
    Button
} from 'native-base';
import CompHeader from '../component/Header';
import Spinner from '../component/Spinner';
import styles from '../../assets/styles';
import axios from 'axios';
export default class ListArticlesScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listArticle:[],
            keyword:'',
            loading:true,
            loadingList:false
        }
    }

    componentWillMount(){
        this.getList();
    }

    getList(){
        this.setState({loadingList:true});
        const {params} = this.props.navigation.state;
        var instance = axios.create({
            timeout: 30000,
        });

        instance.get('https://newsapi.org/v1/articles',{
            params:{
                source:params.source,
                apiKey:'b7cc87cbe6a4426982e794d014ca631b',
            }
        }).then(resp => {
            const listArticle = resp.data.articles;
            const Articles = [];
            listArticle.forEach((item) => {
                if(item.urlToImage == null || item.urlToImage == ''){
                    item.urlToImage = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png';
                }
                if(item.publishedAt == null || item.publishedAt == ''){
                    item.publishedAt = 'no date'
                }
                if(item.author == null || item.author == ''){
                    item.author = 'no author'
                }
                if(item.url == null){
                    item.url = ''
                }

                var x = item.title;

                if(x.toLowerCase().includes(this.state.keyword.toLowerCase())){
                    Articles.push(item);
                }
            });
            this.setState({listArticle:Articles});
            this.setState({
                loadingList:false,
                loading:false
            });
        }).catch(function (error) {
            console.log(error);
            Alert.alert("Request Time Out");
        }.bind(this));
    }

    truncateStr(str){
        if(str != null) {
            if (80 < str.length) {
                return str.substring(0, 80) + ' ...';
            } else return str;
        }else{
            return 'No Description ...';
        }
    }

    renderList(){
        if(this.state.loadingList) return <Spinner type="list"/>;
        if(this.state.listArticle.length){
            return(
                <List
                    dataArray={this.state.listArticle}
                    renderRow={(item) =>
                    <ListItem style={{backgroundColor:'#6d6d6d',borderBottomWidth:0,margin : 0}}
                        button={true}

                        >
                        <Row>
                            <Card>
                                <CardItem header style={{backgroundColor:'#1b1b1b'}}>
                                    <Text style={{color:'#fff'}}>{item.title}</Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Row>
                                            <Image
                                                style={styles.artcimg}
                                                source={{uri:item.urlToImage}}
                                                resizeMode="cover"
                                            />
                                        </Row>
                                        <Row style={{backgroundColor:'#424242',height:70}}    >
                                            <Col size={70} style={{padding:10}}>
                                                <Row>
                                                    <Text style={{color:'#fff',fontStyle:'italic'}}>{'by '+item.author}</Text>
                                                </Row>
                                                <Row>
                                                    <Text style={{color:'#fff'}}>{item.publishedAt.substring(0,10)}</Text>
                                                </Row>
                                            </Col>
                                            <Col size={30} style={{backgroundColor:'rgba(0, 0, 0, 0.3)',height:70}}>
                                                <Button transparent
                                                        style={styles.btntransparent}
                                                        onPress={()=>{
                                                            this.props.navigation.navigate('View',{title:item.title,url:item.url})
                                                        }}
                                                        >
                                                    <Icon name="paper" style={{color:'#fff'}}/>
                                                    <Text style={{color:'#fff',fontSize:10}}>Read more</Text>
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row style={{margin:10}}>
                                            <Text>{this.truncateStr(item.description)}</Text>
                                        </Row>
                                    </View>
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
        if(this.state.loading) return <Spinner/>;
        return (
            <Container style={styles.container}>
                <CompHeader title={"Articles list from "+params.sourceName} {...this.props} back="true"/>
                <Content style={{backgroundColor:'#6d6d6d'}}>
                    <Row style={{height:60}}>
                        <Col>
                            <Item style={{borderBottomWidth: 1}}>
                                <Icon style={{color:'#fff',paddingLeft:10}} name="search"/>
                                <Input placeholder="Find Article ..."
                                       value={this.state.keyword}
                                       style={{color:'#fff'}}
                                       placeholderTextColor="#e8e8e8"
                                       onChangeText={keyword => this.setState({keyword})}
                                       onChange={()=>{
                                            this.getList();
                                    }}
                                />
                            </Item>
                        </Col>
                    </Row>
                    {this.renderList()}
                </Content>
            </Container>
        );
    }
}