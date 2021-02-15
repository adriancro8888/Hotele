import React, {memo, useEffect, useState} from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as actionsTypes from "../store/actions/types";
import AppIntroSlider from "react-native-app-intro-slider";
import { useDispatch } from 'react-redux'
import useApi from "../utils/useApi";

const slides = [
    {
        key: "one",
        title: "JUST TRAVEL",
        text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
        image: require("../../assets/1.png"),
    },
    {
        key: "two",
        title: "TAKE A BREAK",
        text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
        image: require("../../assets/2.png"),
    },
    {
        key: "three",
        title: "ENJOY YOUR JOURNEY",
        text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
        image: require("../../assets/3.png"),
    },
];

const OnBoardScreen = (props) => {
    const dispatch = useDispatch();
    const {loading, error, data} = useApi({
        url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
        usefullurl: true,
        method: "POST"
    });

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slidecontainer}>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: "cover",
                        height: "73%",
                        width: "100%",
                    }}
                />
                <Text
                    style={{
                        paddingTop: 25,
                        paddingBottom: 10,
                        fontSize: 23,
                        fontWeight: "bold",
                        color: "#ffffff",
                        alignSelf: "center",
                    }}
                >
                    {item.title}
                </Text>

                <Text style={{
                    textAlign:"center",
                    color:"#ffffff",
                    fontSize:15,
                    paddingHorizontal:30
                }}>
                    {item.text}
                </Text>
            </View>
        );
    };

    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons name="arrow-forward" size={24} color="rgba(255, 255, 255, .9)" />
            </View>
        );
    };

    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons name="ios-checkmark" size={24} color="rgba(255, 255, 255, .9)" />
            </View>
        );
    };

    return (
        <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            activeDotStyle={{
                backgroundColor: 'rgba(255, 255, 255, .9)',
                width: 20
            }}
            onDone={() => {
                dispatch({ type: actionsTypes.hideOnboard, payload: true });
                dispatch({
                    type: actionsTypes.setAmadeusToken,
                    payload: data.access_token
                })
                // props.navigation.navigate("HomeScreen");
            }}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
        />
    );
}

const styles = StyleSheet.create({
    slidecontainer: {
        flex: 1,
        backgroundColor: "#5c009f"
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 320,
        height: 320,
        marginVertical: 32,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    buttonCircle: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default memo(OnBoardScreen);
