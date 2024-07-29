let heroiSaldo = rankearGamer(50, 10)
let nivel

function rankearGamer(vitorias, derrotas){
    let saldoDeRankeadas = vitorias - derrotas
    return saldoDeRankeadas
}
    if (heroiSaldo < 10){ 
        nivel = "Ferro"
    } else if (heroiSaldo > 11 && heroiSaldo < 20){
        nivel = "Bronze"
    } else if (heroiSaldo > 21 && heroiSaldo < 50){ 
        nivel = " Prata"
    } else if (heroiSaldo > 51 && heroiSaldo < 80){ 
        nivel= "Ouro"
    } else if (heroiSaldo > 81 && heroiSaldo < 90){
        nivel = "Diamante"
    } else if (heroiSaldo > 91 && heroiSaldo < 100){ 
        nivel = "Lendário"
    } else if (heroiSaldo >= 100){ 
        nivel = "Imortal"
    }

    console.log(`O heroi tem saldo de ${heroiSaldo} está no nível de ${nivel}`)