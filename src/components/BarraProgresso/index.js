import { View } from "react-native";

// Estilo
import style from "./style";

export default function BarraProgresso({ color, progress }) {
    return <View style={style.total}>
        <View style={[style.preenchido, {width: `${progress}%`, backgroundColor: color}]} />
    </View>
}