import colors from "../../common/style/colors";

const style = {
    content : {
        flexDirection: 'row',
        marginTop: 20
    },

    contentDetalhes : {
        marginLeft: 14,
        position: 'relative',
        width: '100%',
        backgroundColor: '#efbc00'
    },

    categoriaNome : {
        color: colors.white,
        marginBottom: 3,
    },

    detalhes : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '50%',
        backgroundColor: '#d1e'
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

    detalhesPorcentagemMesAnterior : {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right'
    },

    detalhesPorcentagemMesAnteriorNeutro : {
        color: colors.neutral
    },

    detalhesPorcentagemMesAnteriorNegativo : {
        color: colors.negative
    },

    detalhesPorcentagemMesAnteriorPositivo : {
        color: colors.positive
    },

    detalhesTextoMesAnterior : {
        color: colors.lightGrey,
        textAlign: 'right'
    }
}

export default style