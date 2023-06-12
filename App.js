import {
    ScrollView,
    StatusBar,
    View
} from 'react-native'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './src/components/Header'
import Footer from "./src/components/Footer";
import Home from "./src/pages/Home";
import colors from "./src/common/style/colors";

export default function App() {
    const [fonteCarregada] = useFonts({
        'circularBold'   : require('./src/common/fonts/CircularStd-Bold.ttf'),
        'circular'       : require('./src/common/fonts/CircularStd-Book.ttf'),
        'circularMedium' : require('./src/common/fonts/CircularStd-Medium.ttf')
    })

    if ( ! fonteCarregada ) {
        return <AppLoading />
    }

    return (
        <View style={{flex: 1, backgroundColor: colors.bgLightGrey}}>
            <ScrollView>
                <Home />
                <StatusBar barStyle='light-content'/>
            </ScrollView>
            <Footer />
        </View>
    );
}