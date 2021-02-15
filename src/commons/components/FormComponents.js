import React from 'react';
import {View, StyleSheet} from "react-native";
import {TextInput} from "react-native-paper";

const InputText = (props) => {
    return (
        <View style={styles.inputTextWrapper}>
            <TextInput
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputTextWrapper: {
        marginBottom: 10
    }
})

export {InputText}
