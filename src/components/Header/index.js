import {
    Image,
    View
} from 'react-native'

// Componentes
import Texto from "../Texto";

// Estilo
import style from "./style";

// Funções
import saudacao from "../../common/util/saudacao";

// Imagens
import perfil from '../../common/images/perfil.jpg'

export default function Header() {
    return <View style={style.content}>
        <View style={style.perfil}>
            <Image source={perfil} style={style.perfilImagem}/>

            <View style={style.perfilDados}>
                <Texto style={style.perfilDadosSaudacao}>
                    { saudacao() },
                </Texto>

                <Texto style={style.perfilDadosNome}>
                    vanessa
                </Texto>
            </View>
        </View>
    </View>
}