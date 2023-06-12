import { View } from 'react-native'

// Componentes
import Header from "../../components/Header";

// Estilo
import style from "./style";
import Gasto from "./components/Gasto";

// Funções
import semana from "../../common/util/semana";

// Mocks
import gastos from "../../common/mocks/gastos";

export default function Home() {
    const resumo = {
        titulo          : 'Gastos da semana',
        subtitulo       : semana(),
        valorDisponivel : '224,56',
        valorTotal      : '500,00'
    }

    return <View style={style.content}>
        <Header />
        <Gasto resumo={resumo} itens={gastos}/>
    </View>
}