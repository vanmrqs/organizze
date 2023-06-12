const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

export default function mesAnterior(lowerCase) {
    const lastMonth   = new Date().getMonth() - 1
    const monthNumber = lastMonth < 0 ? 11 : lastMonth

    if ( lowerCase ) {
        return months[monthNumber].toLowerCase()
    }

    return months[monthNumber]
}