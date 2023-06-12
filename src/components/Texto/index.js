import {
    StyleSheet,
    Text
} from 'react-native'

export default function Texto({ children, style }) {
    let estiloFontFamily = estilos.texto

    if ( 'bold' === style?.fontWeight ) {
        estiloFontFamily = estilos.textoNegrito
    }

    return <Text style={[style, estiloFontFamily]}>
        {children}
    </Text>
}

const estilos = StyleSheet.create({
    texto : {
        fontFamily : 'circular'
    },

    textoNegrito : {
        fontFamily : 'circularBold',
        fontWeight: 'normal'
    }
})