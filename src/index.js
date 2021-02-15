import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {defaultTheme, darkTheme} from "./utils/theme";
import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigator from "./navigators/rootNavigator";
import {useSelector} from 'react-redux';

const Hotele = (props) => {
    const darktheme = useSelector(state => state.preferences.darktheme);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <PaperProvider theme={darktheme ? darkTheme : defaultTheme}>
                <RootNavigator/>
            </PaperProvider>
        </SafeAreaView>
    );
}


export default Hotele;
