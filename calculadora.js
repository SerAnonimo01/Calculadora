//Criação dos Personagens
let Heroi = [
        ["Luan Santana", 5, 2,],
        ["Albert Einstein", 81, 1,],
        ["Joelma", 56, 7,],
        ["JorginhoGameplay", 200, 0,]
    ]

//Lista de Personagens
    for (let i = 0; i < Heroi.length; i++) {
        let nome = Heroi[i][0]
        let vitoria = Heroi[i][1]
        let derrota = Heroi[i][2]
        let saldo = saldovitoria(vitoria, derrota)

//Função de saldo de vidas

    function saldovitoria(vitoria, derrota) {
        let resultado = vitoria - derrota
        return resultado
}  

//Vitória por Nível
let Classificacao

    if (saldo < 10) {
        Classificacao = "Ferro"
    }
        else if (saldo <= 20) {
            Classificacao = "Bronze"
        }
        else if (saldo <= 50) {
            Classificacao = "Prata"
        }
        else if (saldo <= 80) {
            Classificacao = "Ouro"
        }
        else if (saldo <= 90) {
            Classificacao = "Diamante"
        }
        else if (saldo <= 100) {
            Classificacao = "Lendário"
        }
        else if (saldo > 100) {
            Classificacao = "Imortal"
        }

//Saída (Mensagem Final)
console.log(`O Herói ${nome} tem de saldo de ${saldovitoria(vitoria, derrota)} está no nível ${Classificacao}`)

    }