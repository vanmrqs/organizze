import {View} from "react-native";

// Componentes
import Texto from "../../../../../../components/Texto";
import BarraProgresso from "../../../../../../components/BarraProgresso";

// Cores
import colors from "../../../../../../common/style/colors";

// Estilo
import style from "./style";

export default function Resumo({ titulo, subtitulo, valorDisponivel, valorTotal }) {
    return <View style={style.resumo}>
        <Texto style={style.resumoTitulo}>
            { titulo }
        </Texto>

        <Texto style={style.resumoSubtitulo}>
            { subtitulo }
        </Texto>

        <BarraProgresso color={colors.positive} progress={54} />

        <View style={style.resumoDisponivelContent}>
            <Texto style={style.resumoDisponivelTitulo}>
                Disponível
            </Texto>

            <Texto>
                <Texto style={style.resumoDisponivelValorDisponivel}>
                    R$ { valorDisponivel }
                </Texto>

                <Texto style={style.resumoDisponivelValorTotal}>
                    &nbsp; /&nbsp;&nbsp;R$ { valorTotal }
                </Texto>
            </Texto>
        </View>
    </View>
}