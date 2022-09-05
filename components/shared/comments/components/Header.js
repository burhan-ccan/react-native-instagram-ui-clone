import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Share, Back} from "../../../../Icons";
function Header() {

    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                 <TouchableOpacity activeOpacity="0.6">
                <Back size={24} fill="#000" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.commentsTitle}>Yorumlar</Text>
                </View>
            </View>
            <View style={styles.action}>
                <TouchableOpacity activeOpacity="0.6" style={styles.button}>
                    <Share size={24} fill="#000" />
                </TouchableOpacity>
            </View>
        </View>)

}


export default Header


const styles = StyleSheet.create({

    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor : '#fff'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    action: {
        justifyContent: 'flex-end',
    },
    button: {
        marginLeft: 20
    },
    commentsTitle : {
        fontWeight : '700',
        fontSize : 25,
        paddingLeft : 30,
        justifyContent : 'flex-start',
        alignItems : 'flex-start'
    }

});