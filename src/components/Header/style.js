import { Dimensions } from "react-native"

// Cores
import colors from "../../common/style/colors";

const width = Dimensions.get('screen').width

const style = {
    content : {
        backgroundColor: colors.bgDarkGrey,
        height: 240,
        paddingLeft: 18,
        paddingTop: 85,
        width: width
    },

    perfil : {
        flexDirection: 'row'
    },

    perfilImagem : {
        borderRadius: 100,
        height: 73,
        width: 73
    },

    perfilDados : {
        justifyContent: 'center',
        marginLeft: 18
    },

    perfilDadosSaudacao : {
        color: colors.lightGrey,
        fontSize: 14
    },

    perfilDadosNome : {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    }
}

export default style