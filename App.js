import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from "./src/store/store";
import Hotele from "./src"

const App = (props) => {

    return (
        <SafeAreaProvider>
            <StatusBar style="auto"/>
            <Provider store={store}>
                <Hotele/>
            </Provider>
        </SafeAreaProvider>
    );
}


export default App;
