import colors from "../../common/style/colors";

const style = {
    content : {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
    },

    icon : {
        marginTop: 10,
    },

    contentDetalhes : {
        marginLeft: 14,
        position: 'relative',
        flexGrow: 1
    },

    categoriaNome : {
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 3,
    },

    detalhes : {
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: 10
    },

    detalhesValor : {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold'
    },

    detalhesPorcentagem : {
        color: colors.lightGrey,
        fontSize: 12
    },

    detalhesPorcentagemMesAnteriorNeutro : {
        color: colors.neutral,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right'
    },

    detalhesPorcentagemMesAnteriorNegativo : {
        color: colors.negative,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right'
    },

    detalhesPorcentagemMesAnteriorPositivo : {
        color: colors.positive,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right'
    },

    detalhesTextoMesAnterior : {
        color: colors.lightGrey,
        fontSize: 12,
        textAlign: 'right'
    }
}

export default style