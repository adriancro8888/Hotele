import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HotelDetailsScreen from "../screens/HotelDetailsScreen";
import {MainDrawer} from "../commons/components/MainDrawer";
import MainHeader from "../commons/components/MainHeader";
import BookHotelScreen from "../screens/BookHotelScreen";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const HomeNav = (props) => {
    return (
        <HomeStack.Navigator
            initialRouteName="Hotels"
            headerMode="none"
        >
            <HomeStack.Screen name="Hotels" component={HomeScreen}/>
            <HomeStack.Screen name="HotelDetails" component={HotelDetailsScreen}/>
            <HomeStack.Screen name="Booking" component={BookHotelScreen}/>
        </HomeStack.Navigator>
    )
}

const DrawerNavigator = (props) => {
    return (
        <Drawer.Navigator
            drawerContent={() => <MainDrawer />}
            initialRouteName="Home"
            screenOptions={{
                header: (props) => <MainHeader {...props} />,
            }}
        >
            <Drawer.Screen name="Dashboard" component={HomeNav} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
