import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from 'react';
import { Dots, Heart, Share, Bookmark, Comment, Dot, DotFilled } from "../../Icons";
import FitImage from "./FitImage";
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime";


dayjs.extend(relativeTime)
function Post({ post,navigation }) {
    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: post.user.avatar
                        }} />
                    <Text style={styles.title}>{post.user.name}</Text>
                </View>
                <Dots size={16} fill="#262626" />
            </View>
            <FitImage medias={post.medias} />
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={styles.action} activeOpacity="0.7">
                            <Heart size={24} fill="#222" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity="0.7">
                            <Comment size={24} fill="#222" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity="0.7">
                            <Share size={24} fill="#222" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity="0.7">
                        <Bookmark size={22} fill="#222" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 5 }}>
                    <Text style={styles.likes}>{post.likes} likes</Text>
                </View>
                <ReadMore
                    numberOfLines={2}
                    seeMoreStyle={{
                        color: '#999'
                    }}
                    expandOnly={true}
                    seeMoreText="more"
                    wrapperStyle={{
                        marginBottom: 7
                    }}
                >
                    <Text style={styles.user}>{post.user.name}</Text>
                    {`  `}
                    {post.description}
                </ReadMore>
                {post.comments > 0 && (

                    <TouchableOpacity style={{ paddingBottom: 7 }} activeOpacity="0.7" onPress={()=>navigation.navigate("Comments",{
                        post:post
                    })}>
                        <Text style={styles.comments}>View all {post.comments} comments</Text>
                    </TouchableOpacity>

                )}
            
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
                    <Text style={styles.translation}>See Translation</Text>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    post: {
        width: '100%',
        height: 'auto',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 15
    },
    username: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10
    },
    title: {
        fontSize: 14,
        fontWeight: '600'
    },
    content: {
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40
    },
    leftActions: {
        flexDirection: 'row'
    },
    centertActions: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    action: {
        marginRight: 12
    },
    likes: {
        fontWeight: '600'
    },
    user: {
        fontWeight: '600',
    },
    comments: {
        opacity: 0.5
    },
    date: {
        fontSize: 13,
        opacity: 0.5
    },
    translation: {
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 10
    },
    pagerView: {
        width: '100%',
        height: 400
    }
})