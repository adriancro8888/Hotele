import React, {useState, useEffect} from 'react';
import {View, Dimensions, Image, StyleSheet} from "react-native";
import {
    Portal, Paragraph, Headline, Divider, FAB,
    useTheme, withTheme, Card, Surface, Title, Text
} from "react-native-paper";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import MainHeader from "../commons/components/MainHeader";
import { Ionicons } from '@expo/vector-icons';
import MapView, {Marker} from "react-native-maps";
import Stars from 'react-native-stars';

const window = Dimensions.get('window');

const HotelDetailsScreen = (props) => {
    const theme = useTheme();
    const hotel = props.route.params;
    const [openFab, setOpenFab] = useState(false);
    const [showFab, setShowFab] = useState(true);
    console.log('log-props.navigation.route.params', props.route.params);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setShowFab(true);
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [props.navigation])

    return (
        <ParallaxScrollView
            style={{ flex: 1, backgroundColor: "#fff", overflow: 'hidden' }}
            renderBackground={() => <Image source={require("../../assets/london_hotel.jpg")} style={{width: window.width, height: 350}}/>}
            renderFixedHeader={() => <MainHeader showBack hideTitle transparent title={hotel.name}/>}
            stickyHeaderHeight={ 75 }
            parallaxHeaderHeight={ 300 }
            fadeOutForeground
        >
            <Surface>
                <View style={styles.bottomCard}>
                    <Headline>{hotel.name ? hotel.name : ""}</Headline>
                    <Stars
                        half={true}
                        default={parseFloat(hotel.rating ? hotel.rating : 0)}
                        update={(val)=>{this.setState({stars: val})}}
                        spacing={4}
                        starSize={40}
                        count={5}
                        disabled
                        fullStar={<Ionicons name={'star'} color="black"/>}
                        emptyStar={<Ionicons name={'star-outline'} color="black"/>}
                        halfStar={<Ionicons name={'star-half'} color="black"/>}
                    />
                    <Divider style={{marginTop: 10, marginBottom: 20}}/>

                    <Text>Address:</Text>
                    <Paragraph>
                        <Text>{(hotel.address && hotel.address.cityName) ? hotel.address.cityName : ""}, {hotel.address.lines[0]},{"\n"}{hotel.address.postalCode}</Text>
                    </Paragraph>
                    <Text>Phone: {hotel.contact ? hotel.contact.phone : ""}</Text>
                    <Text>Fax: {hotel.contact ? hotel.contact.fax : ""}</Text>

                    <Card
                        style={{
                            marginTop: 10,
                            marginBottom: 10,
                        }}
                        elevation={6}
                    >
                        <MapView
                            initialRegion={{
                                latitude: hotel.latitude ? hotel.latitude : 37.78825,
                                longitude: hotel.longitude ? hotel.longitude : -122.4324,
                                latitudeDelta: 0.0022,
                                longitudeDelta: 0.0021,
                            }}
                            style={styles.map}
                        >
                            <Marker
                                coordinate={{
                                    latitude : hotel.latitude ? hotel.latitude : 37.78825 ,
                                    longitude : hotel.longitude ? hotel.longitude : -122.4324
                                }}
                            />
                        </MapView>
                    </Card>

                    <Paragraph>
                        {hotel.description ? hotel.description.text : ""}
                    </Paragraph>
                </View>
            </Surface>
            {
                showFab &&
                <Portal>
                    <FAB.Group
                        fabStyle={{
                            backgroundColor: theme.colors.primary
                        }}
                        open={openFab}
                        icon={openFab ? 'calendar-today' : 'plus'}
                        actions={[
                            {
                                icon: 'calendar-today',
                                onPress: () => {
                                    props.navigation.navigate("Booking");
                                    setShowFab(false);
                                }
                            },
                            {
                                icon: 'share',
                                label: 'Share',
                                onPress: () => alert("Share this hotel!"),
                            }
                        ]}
                        onStateChange={() => {
                            setOpenFab(!openFab);
                        }}
                    />
                </Portal>
            }
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    bottomCard: {
        padding: 10,
    },
    map: {
        width: window.width,
        height: 200,
    },
})

export default withTheme(HotelDetailsScreen)
