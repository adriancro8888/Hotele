import React, {useEffect, useState} from 'react';
import {Text} from "react-native-paper";
import MainLayout from "../commons/layouts/MainLayout";
import useApi from "../utils/useApi";
import Hotel from "../commons/components/Hotel";

const HomeScreen = (props) => {
    const {loading, data, error} = useApi( {
        url: 'hotel-offers?cityCode=LON',
        useaccesstoken: true
    });

    const [hotels, setHotels] = useState(false);

    useEffect(() => {
        console.log('log-data', data);
        setHotels(data.data);
    }, [loading, data, error]);

    return (
        <MainLayout
            header={{
                title: "Home"
            }}
            loader={loading}
        >
            {
                hotels &&
                hotels.map((item, index) => {
                    return (
                        <Hotel key={index} {...item}/>
                    )
                })
            }
        </MainLayout>
    );
}

export default HomeScreen
