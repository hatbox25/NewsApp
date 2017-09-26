/**
 * Created by EdwinLokyta on 26/09/2017.
 */
import React from 'react'
import{
    WebView
} from 'react-native';
import {
    Container,
    Content,
} from 'native-base';
import Spinner from '../component/Spinner';
import CompHeader from '../component/Header';
import styles from '../../assets/styles';
export default class ViewArticleScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loading:true
        }
    }

    componentWillMount(){
        this.setState({loading:false});
    }

    render() {
        const {params} = this.props.navigation.state;
        if(this.state.loading) return <Spinner />;
        return (
            <Container style={styles.container}>
                <CompHeader title={params.title} {...this.props} back="true" home="true"/>
                <Content>
                    <WebView
                        source={{uri: params.url}}
                        style={styles.webview}
                        renderLoading={()=>{return <Spinner />}}
                        startInLoadingState
                    />
                </Content>
            </Container>
        );
    }
}