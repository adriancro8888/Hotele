import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from "react-native";
import {ActivityIndicator, Portal} from "react-native-paper";
import MainHeader from "../components/MainHeader";
const window = Dimensions.get('window');

const MainLayout = (props) => {

    useEffect(() => {

    }, [props]);
    console.log('log-props.loader ', props.loader);

    return (
        <>
            <MainHeader {...props.header}/>
            <View style={{flex: 1, paddingBottom: 20, width: window.width}}>
                {
                    props.loader &&
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" animating={true} />
                    </View>
                }
                <ScrollView style={styles.container}>
                    {props.children}
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    loader: {
        position: 'absolute',
        top: "50%",
        left: "45%",
        zIndex: 99999
    }
});

export default MainLayout
