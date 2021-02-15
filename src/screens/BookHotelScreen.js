import React from 'react';
import {View} from "react-native";
import MainLayout from "../commons/layouts/MainLayout";
import {Button, useTheme} from "react-native-paper";
import PickerDate from "../commons/components/PickerDate";
import {InputText} from "../commons/components/FormComponents";

const BookHotelScreen = (props) => {
    const theme = useTheme();

    return (
        <MainLayout
            header={{
                showBack: true
            }}
        >
            <InputText
                label="Full Name"
                value={""}
                onChangeText={(value) => {
                    console.log('log-value', value);
                }}
            />
            <InputText
                label="Phone"
                value={""}
                onChangeText={(value) => {
                    console.log('log-value', value);
                }}
            />
            <InputText
                label="Address"
                value={""}
                multiline
                onChangeText={(value) => {
                    console.log('log-value', value);
                }}
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}
            >
                <View
                    style={{
                        width: '45%'
                    }}
                >
                    <PickerDate title="Start Date"/>
                </View>
                <View
                    style={{
                        width: '45%'
                    }}
                >
                    <PickerDate title="End Date"/>
                </View>
            </View>
            <Button mode="contained">Book Now</Button>
        </MainLayout>
    );
}

export default BookHotelScreen
