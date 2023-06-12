import {View} from "react-native";

// Estilo
import style from './style'

// Ícones
import {FontAwesome5} from "expo-vector-icons";
import icone from "../../common/util/icone";

export default function CategoriaIcone({ nome, color }) {
    nome = icone(nome)

    return <View style={[style.content, {backgroundColor: `#${color}`}]}>
        <FontAwesome5 name={ nome } style={style.icone}/>
    </View>
}