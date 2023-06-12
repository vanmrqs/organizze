import { View } from 'react-native'

// Estilo
import style from "./style";

// Imagens
import FontAwesome5 from 'expo-vector-icons/FontAwesome5'

export default function Footer() {
    return <View style={style.content}>
        <FontAwesome5 name='home' style={[style.icone, style.iconeAtivo]}/>
        <FontAwesome5 name='exchange-alt' style={style.icone}/>
        <FontAwesome5 name='bullseye' style={style.icone}/>
    </View>
}