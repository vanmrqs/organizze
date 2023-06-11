import {
    SafeAreaView,
    StatusBar
} from 'react-native'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './src/components/Header'

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
        <SafeAreaView>
            <Header />
            <StatusBar barStyle="dark-content" />
        </SafeAreaView>
    );
}