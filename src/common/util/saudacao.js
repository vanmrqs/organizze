export default function saudacao() {
    const date = new Date()
    let hour   = date.getHours()

    if ( hour >= 5 && hour <= 12 ) {
        return 'Bom dia'
    }

    if ( hour <= 17 ) {
        return 'Boa tarde'
    }

    return 'Boa noite'
}