import React, {useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from "../screens/OnBoardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DrawerNavigator from "./DrawerNavigator";
import {darkTheme, defaultTheme} from "../utils/theme";
import { useSelector } from 'react-redux';


const Stack = createStackNavigator();

const RootNavigator = (props) => {
    const hideOnboard = useSelector(state => state.preferences.hideOnboard);
    const darktheme = useSelector(state => state.preferences.darktheme);

    return (
        <NavigationContainer theme={darktheme ? darkTheme : defaultTheme}>
            <Stack.Navigator
                initialRouteName="OnBoardingScreen"
                headerMode="none"
            >
                {
                    hideOnboard ?
                        <>
                            <Stack.Screen name="Home" component={DrawerNavigator} />
                        </> :
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="OnBoardingScreen"
                            component={OnBoardingScreen}
                        />
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default RootNavigator;
