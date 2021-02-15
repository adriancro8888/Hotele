import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import { withTheme } from 'react-native-paper';

const Hotel = (props) => {
    const navigation = useNavigation();
    return (
        <Card
            style={{marginBottom: 20}} elevation={6}
            onPress={() => {
                navigation.navigate("HotelDetails", {...props.hotel});
            }}
        >
            <Card.Cover source={require("../../../assets/london_hotel.jpg")} />
            <Card.Content>
                <Title>{props.hotel.name}</Title>
                <Paragraph>Rating: {props.hotel.rating}</Paragraph>
            </Card.Content>
        </Card>
    );
}

export default withTheme(Hotel);
