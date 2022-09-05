import {View, Text, StyleSheet, Image, ScrollView, FlatList, StatusBar} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from "dayjs"
import React from "react";

function Comments({route}) {
    const {post}=route.params
    const renderItem = ({ item }) => (
           <>
               <View style={styles.userComment}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: item.user.avatar
                    }} />


                <Text style={styles.userPost}>{item.user.name}  {` `}
                    <Text style={styles.descriptions}> {item.comment}
                    </Text>
                </Text>
            </View>
               <View style={styles.dateComment}>
                   <Text style={{fontSize: 12,
                       opacity: 0.5}}>{dayjs(item.date).fromNow()}</Text>

                   <Text style={{fontSize: 12, paddingLeft: 15,
                       opacity: 0.5}}>10 beğenme </Text>

                   <Text style={{fontSize: 12, paddingLeft: 15,
                       opacity: 0.5}}> yanıtla </Text>
                   <Text style={{fontSize: 12, paddingLeft: 15,
                       opacity: 0.5}}> gönder </Text>
               </View>
           </>
     );
    return (

        <View style={styles.comment}>
              <Header/>
            <ScrollView>
           <View style={styles.user}>
              <Image
                  style={styles.avatar}
                  source={{
                      uri: post.user.avatar
                  }} />


                  <Text style={styles.userPost}>{post.user.name}  {` `}
                     <Text style={styles.descriptions}> {post.description}
                     </Text>
                  </Text>
          </View>

            <View style={styles.date}>
                <Text style={{fontSize: 13,
                    opacity: 0.5}}>{dayjs(post.date).fromNow()}</Text>
            </View>
                <FlatList
                    data={post.comment}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
        </ScrollView>
            <Footer avatar={post.user.avatar} style={{
                position : 'absolute',
                bottom : 0,
            }} />
        </View>
    )

}


export default Comments

const styles = StyleSheet.create({
    userPost: {
        paddingLeft : 5 ,
        backgroundColor : 'white',
        paddingVertical : 5,
        flex :1,
        fontWeight: '600',
        paddingRight : 20
    },
    descriptions : {
        fontWeight : '400',
        color : '#000',
        fontSize : 14,
        flex : 1,

    },
    userComment : {
        paddingHorizontal : 15 ,
        paddingBottom : 5,
        backgroundColor : 'white',
        paddingTop : 10,
        fontWeight: '600',
        flexDirection : "row",
    },
    user: {
        paddingHorizontal : 10 ,
        backgroundColor : 'white',
        paddingTop : 10,
        fontWeight: '600',
         flexDirection : "row",
    },
    comments: {
        opacity: 0.5
    },
    comment : {
      backgroundColor : 'white',
      flex : 1,
    },
    dateComment : {
        paddingHorizontal : 58,
        justifyContent : 'flex-start',
        flexDirection  :'row'
     },
    date: {
        height : 30,
        paddingHorizontal : 58,
        justifyContent : 'center',
        borderBottomWidth : 0.5,
        borderBottomColor : '#ddd'
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 35,
        marginRight: 10,
        flexDirection : 'row'
    },
    container: {
        flex: 1,
        backgroundColor : 'red',
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
          marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
    },
});