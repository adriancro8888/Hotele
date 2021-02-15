import React from 'react';
import {StyleSheet, View, Image} from "react-native";
import {Button, Avatar, TouchableRipple, Appbar} from "react-native-paper";
import {useNavigation, useRoute} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';

const MainHeader = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    console.log('log-navigation', navigation);

    return (
        <Appbar style={[styles.topBarContainer, (props.transparent ? {backgroundColor: 'transparent'} : {})]}>
            {
                props.transparent &&
                <LinearGradient  colors={["#b8b8b8", "transparent"]} locations={[0,1.2]} style={styles.linearGradient}/>
            }

            {
                (navigation.previous || props.showBack) ?
                    <Appbar.BackAction onPress={navigation.goBack}/> :
                    null
            }
            <Appbar.Content
                title={!props.hideTitle ? (props.title ? props.title : route.name) : ""}
            />
            <Appbar.Action size={34} icon="magnify" onPress={() => {}} />
            <TouchableRipple
                style={{
                    borderRadius: 100
                }}
                onPress={() => {
                    navigation.toggleDrawer();
                }}>
                <Avatar.Image
                    source={{
                        uri:
                            'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                    }}
                    size={40}
                />
            </TouchableRipple>
        </Appbar>
    );
}

const styles = StyleSheet.create({
    topBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,
        elevation: 0
    },
    floatLeft: {
        marginRight: "auto",
    },
    floatRight: {
        marginLeft: "auto",
    },
    menuImageStyle: {
        width: 20,
        height: 20,
    },
    profileImageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    contentContainer: {
        marginTop: 12,
    },
    titleTextStyle: {
        fontSize: 46,
        color: "#2c2305",
        fontWeight: "bold",
    },
    subtitleTextStyle: {
        fontSize: 13,
        marginTop: 5,
        fontWeight: "400",
        color: "#999893",
    },
    searchBarStyle: {
        padding: 16,
        marginTop: 24,
        borderRadius: 24,
        flexDirection: "row",
    },
    searchImageStyle: {
        width: 20,
        height: 20,
    },
    searchInputStyle: {
        marginLeft: 12,
        fontWeight: "500",
    },

    linearGradient: {
        backgroundColor: "transparent",
        position: "absolute",
        height: 60,
        top: 0,
        left: 0,
        right: 0
    }
})

export default MainHeader
