import {
    FlatList,
    View
} from "react-native";

// Componentes
import GastoItem from "../../../../../../components/GastoItem";
import Texto from "../../../../../../components/Texto";

// Estilo
import style from "./style";

export default function Detalhes({ itens }) {
    return <View style={style.content}>
        <Texto style={style.titulo}> Detalhes </Texto>

        {/*{ itens.map(({ porcentagem }) => {*/}
        {/*    return <Texto> {porcentagem} </Texto>*/}
        {/*}) }*/}

        <FlatList data={itens} renderItem={GastoItem} scrollEnabled={false}/>
    </View>
}