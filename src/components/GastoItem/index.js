import { View } from "react-native";

// Componentes
import BarraProgresso from "../BarraProgresso";
import CategoriaIcone from "../CategoriaIcone";
import Texto from "../Texto";

// Estilo
import style from './style'

// Funções
import mesAnterior from '../../common/util/mesAnterior'

export default function GastoItem({ item: { categoria, valor, porcentagem, porcentagemMesAnterior }}) {
    let stylePorcentagemMesAnterior
    let labelPorcentagemMesAnterior

    if ( porcentagemMesAnterior === 0 ) {
        stylePorcentagemMesAnterior = style.detalhesPorcentagemMesAnteriorNeutro
        labelPorcentagemMesAnterior = '-'
    } else if ( porcentagemMesAnterior > 0 ) {
        stylePorcentagemMesAnterior = style.detalhesPorcentagemMesAnteriorNegativo
        labelPorcentagemMesAnterior = `${porcentagemMesAnterior}%`
    } else {
        stylePorcentagemMesAnterior = style.detalhesPorcentagemMesAnteriorPositivo
        labelPorcentagemMesAnterior = `+${porcentagemMesAnterior}%`
    }

    return <View style={style.content}>
        <CategoriaIcone nome={categoria.name} color={categoria.color} />

        <View style={style.contentDetalhes}>
            <Texto style={style.categoriaNome}>
                {categoria.name}
            </Texto>

            <BarraProgresso color={categoria.color} progress={porcentagem} />

            <View style={style.detalhes}>
                <View>
                    <Texto style={style.detalhesValor}>
                        R$ { valor }
                    </Texto>

                    <Texto style={style.detalhesPorcentagem}>
                        { porcentagem }%
                    </Texto>
                </View>

                <View>
                    <Texto style={[style.detalhesPorcentagemMesAnterior, stylePorcentagemMesAnterior]}>
                        { labelPorcentagemMesAnterior }
                    </Texto>

                    <Texto style={style.detalhesTextoMesAnterior}>
                        comparado ao mês anterior ({ mesAnterior(true) })
                    </Texto>
                </View>
            </View>
        </View>
    </View>
}