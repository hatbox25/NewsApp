/**
 * Created by EdwinLokyta on 25/09/2017.
 */
import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const styles =  StyleSheet.create({
    container: {
        backgroundColor :'#fff',
        flex            : 1,
        justifyContent:'center'
    },
    content :{
        backgroundColor :'#e0e0e0',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        backgroundColor:'#424242',
        paddingTop:22,
        width:'100%',
        paddingBottom:8
    },
    row:{
        padding:15,
        backgroundColor:'#F6F8F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardimg:{
        flex:1,
        width:'90%',
        height:responsiveHeight(25),
        alignSelf:'center',
        marginTop:-15,
        margin:8
    },
    artcimg:{
        flex:1,
        width:'100%',
        height:responsiveHeight(40),
        alignSelf:'center',
    },
    title_header:{
        textAlign:'center',
        fontWeight:'500',
        color:'#fff',
        fontSize:16,
    },
    webview:{
        width:'100%',
        height:responsiveHeight(100),
    },
    btntransparent:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        marginTop:15
    }
});

export default styles;