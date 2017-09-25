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
    },
    title_header:{
        color:'#fff',
        fontSize:16,
    },
    row:{
        padding:15,
        backgroundColor:'#F6F8F9',
        borderRadius:5,
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
    }
});

export default styles;