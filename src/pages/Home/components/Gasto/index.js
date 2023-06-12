import { View } from "react-native";

// Componentes
import Resumo from "./components/Resumo";
import Separator from "../../../../components/Separator";

// Estilo
import style from "./style";
import Detalhes from "./components/Detalhes";

export default function Gasto({ resumo, itens }) {
    return <View style={style.content}>
        <Resumo {...resumo} />

        <Separator />

        <Detalhes itens={itens} />
    </View>
}