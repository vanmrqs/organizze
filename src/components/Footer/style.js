import { Dimensions } from "react-native"

// Cores
import colors from "../../common/style/colors";

const width = Dimensions.get('screen').width

const style = {
    content : {
        alignItems: 'center',
        backgroundColor: colors.bgDarkGrey,
        bottom: 0,
        flexDirection: 'row',
        height: 90,
        justifyContent: 'space-around',
        paddingBottom: 30,
        position: 'fixed',
        width: width
    },

    icone : {
        color: colors.mediumGrey,
        fontSize: 20
    },

    iconeAtivo : {
        color: colors.primary
    }
}

export default style