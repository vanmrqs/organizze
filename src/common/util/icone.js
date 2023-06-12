const icones = {
    alimentacao            : 'utensils',
    assinaturas_e_servicos : 'desktop',
    bares_e_restaurantes   : 'glass-martini-alt',
    casa                   : 'home',
    compras                : 'shopping-bag',
    cuidados_pessoais      : 'user',
    dividas_e_emprestimos  : 'receipt',
    educacao               : 'graduation-cap',
    familia_e_filhos       : 'heart',
    impostos_e_taxas       : 'file-invoice-dollar',
    investimentos          : 'chart-bar',
    lazer_e_hobbies        : 'laugh-beam',
    mercado                : 'shopping-cart',
    outros                 : 'list',
    pets                   : 'paw',
    presentes_e_doacoes    : 'gift',
    roupas                 : 'tshirt',
    saude                  : 'plus-square',
    trabalho               : 'briefcase',
    transporte             : 'bus',
    viagem                 : 'plane'
}

export default function icone(nome) {
    nome = nome.toString().toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll(new RegExp("[äãàáâ]", 'g'), 'a')
        .replaceAll(new RegExp("[êëèé]", 'g'), 'e')
        .replaceAll(new RegExp("[ïìí]", 'g'), 'i')
        .replaceAll(new RegExp("[öõòóô]", 'g'), 'o')
        .replaceAll(new RegExp("[üùúû]", 'g'), 'u')
        .replaceAll(new RegExp("[ñ]", 'g'), 'n')
        .replaceAll(new RegExp("[ç]", 'g'), 'c')
        .replaceAll(new RegExp("[-\(\),;:\|!\"#\$%&/=\?~\^><ªº]", 'g'), '_')

    return icones[nome]
}