import {StyleSheet, View, Text, Keyboard, TouchableOpacity, Image, TextInput} from 'react-native'
import {Share, Back} from "../../../../Icons";
import React from "react";
function Footer(avatar) {
    return (
        <View style={styles.footer}>
            <View style={styles.footerLeft}>
                 <TouchableOpacity activeOpacity="0.6">
                     <Image
                         style={styles.avatar}
                         source={{
                             uri: avatar.avatar
                         }} />

                </TouchableOpacity>

            </View>
            <TextInput
                style={styles.input}
                onSubmitEditing={Keyboard.dismiss}
                placeholder='burhan_ccan olarak yorum yap...'
            />
            <View style={styles.action}>
                <TouchableOpacity activeOpacity="0.6" style={styles.button}>
                    <Text style={{color:'#0099ff'}}>Paylaş</Text>
                </TouchableOpacity>
            </View>
        </View>)

}


export default Footer


const styles = StyleSheet.create({

    footer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor : '#fff',
        borderTopWidth : 0.5,
        borderTopColor : '#ddd'
    },
    footerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    action: {
        justifyContent: 'flex-end',
        flexDirection : 'row',
    },
    button: {
        marginLeft: 20,
    },
    commentsTitle : {
        fontWeight : '700',
        fontSize : 25,
        paddingLeft : 30,
        justifyContent : 'flex-start',
        alignItems : 'flex-start'
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 35,
        marginRight: 10,
        flexDirection : 'row'
    },
    input: {
        height: 40,
        margin: 12,
        width : 100,
        flex : 1,
        flexDirection : "row",
        padding: 10,
    }
});