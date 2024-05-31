# Calculadora de partidas Rankeadas 🧮

<p align="left">
  <img align="center" src="https://i.pinimg.com/originals/36/09/a5/3609a58f09f1c9c87fea4cf875b564b7.gif" alt="Imagem">
</p>


> *OBS: Este é um repositório desenvolvido durante o desafio do curso de Criação de Jogos da [DIO](https://www.dio.me/)*

## Sumário
- Resumo ✍🏻
- Linguagem 💻
- Estudo 🤓
   - 1. Criação dos Personagens 🦸🏻‍♂️
   - 2. Lista de Personagens 📘
   - 3. Função de saldo de vidas 💌
   - 4. Vitória por Nível 💫
   - 5. Saída (Mensagem Final) ⌨️
- Explicação dos Códigos 🚀
- Conclusão 🐜


## Resumo ✍🏻
Esse projeto é um protótipo com o objetivo de criar uma Calculadora de Vitórias de Partidas Ranqueadas, era necessário utilizar:

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

E ao final exibir uma mensagem de saída certificando o funcionamento das linhas de códigos.

## Linguagem 💻
A linguagem utilizada nesse repositório foi o Java Script:

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="35" alt="javascript logo"  />
</div>

## Estudo 🤓
Para concluir o desafio foi necessário dividi-lo em 4 partes:

- Criação dos Personagens
- Lista de Personagens
- Função de saldo de vidas
- Vitória por Nível
- Saída (Mensagem Final)

### 1. Criação dos Personagens 🦸🏻‍♂️
Utilizando os mesmos personagens do meu repositório [Protótipo de Classificação De Níveis de Personagens](https://github.com/SerAnonimo01/Heroi.git), ou seja, produzi uma Matriz, uma coleção de elementos (não necessáriamente do mesmo tipo) organizados em linhas e colunas, o que facilitaria guardar todas as informações para os próximos passos.

```
let Heroi = [
        ["Luan Santana", 5, 2,],
        ["Albert Einstein", 81, 1,],
        ["Joelma", 56, 7,],
        ["JorginhoGameplay", 200, 0,]
    ]
```

Respectivamente, cada coluna é: Nome, Vitórias e Derrotas.

### 2. Lista de Personagens 📘

Após criar uma Matriz, é necessário algo que liste cada elemento e os conectasse entre si, um sistema parecido com o [Protótipo de Classificação De Níveis de Personagens](https://github.com/SerAnonimo01/Heroi.git), onde usamos o `for` para ter essa conectividade em cima de novas variáveis agora "listadas".

```
for (let i = 0; i < Heroi.length; i++) {
        let nome = Heroi[i][0]
        let vitoria = Heroi[i][1]
        let derrota = Heroi[i][2]
        let saldo = saldovitoria(vitoria, derrota)
```

### 3. Função de saldo de vidas 💌
A ideia do desafio além de produzir uma Calculadora de Partidas Ranqueadas mas também uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, ou seja, um calculo (vitórias - derrotas).

```
function saldovitoria(vitoria, derrota) {
        let resultado = vitoria - derrota
        return resultado
}  
```

### 4. Vitória por Nível 💫
Agora é o momento de elaborar a classificação, para isso criei a variável Classificacao e fiz uma "estrutura de decisão" de acordo com essas informações:

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

```
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
```

### Saída (Mensagem Final) ⌨️
E para concluir o desafio era necessário apenas gerar a mensagem final:

```
console.log(`O Herói ${nome} tem de saldo de ${saldovitoria(vitoria, derrota)} está no nível ${Classificacao}`)

    }
```

## Explicação dos Códigos 🚀
```
let Heroi = [
        ["Luan Santana", 5, 2,],
        ["Albert Einstein", 81, 1,],
        ["Joelma", 56, 7,],
        ["JorginhoGameplay", 200, 0,]
    ]
```
> Objetivo principal: Criar os personagens e suas respectivas caracteristicas usando matriz

`let`: Cria uma nova variável.

`Heroi`: Nome da variável.

---
```
for (let i = 0; i < Heroi.length; i++) {
        let nome = Heroi[i][0]
        let vitoria = Heroi[i][1]
        let derrota = Heroi[i][2]
        let saldo = saldovitoria(vitoria, derrota)
```
> Objetivo principal: Percorrer uma lista (Matriz)

`for`: É um loop, ele vai percorrer por toda a Matrix.

`let`: Cria uma nova Variável. 

`i = 0`: A Variável `i` é o indice que usaremos para acessar cada herói da Matriz, colocamos `= 0` pois `i` começara na linha 0, ou seja, na primeira linha.

`i < Heroi.length`: Enquanto `i` for menor que `Heroi.lenght` o looping continua, isso garante que o loop não acesse um indice fora dos limites da Matriz; o `lenght` retorna o número de heróis dentro da Matriz.

`i++`: Esse código seria equivalente a i = i+i, isso move o indice para o próximo personagem na próxima interação do loop.

`let (nome da variável) = Heroi[i][Nº]`: A variável `i` indica a linha e o `Nº` o número da coluna, ou seja a linha vai variar mas as colunas sempre vão ter a informação do nome, xp, sexo, classe ou equipamento.

`let saldo = saldovitoria(vitoria, derrota)`: você quer calcular o saldo para cada herói individualmente, o resultado (o saldo de vitórias e derrotas) é então armazenado na variável `saldo`. Existe um pequeno passo a passo sobre funcionamento dessa variável:

- O loop `for` percorre cada herói na lista ` Heroi`.

- Para cada herói, ele extrai o nome, as vitórias e as derrotas.

- Ele então chama a função `saldovitoria(vitoria, derrota)` com as vitórias e derrotas do herói atual. Esta função subtrai as derrotas das vitórias e retorna o resultado.

- Este resultado é armazenado na variável `saldo` e então usada para determinar a classificação do herói.

---
```
function saldovitoria(vitoria, derrota) {
        let resultado = vitoria - derrota
        return resultado
}  
```
> Objetivo principal: Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador

`function`: Aqui está sendo declarada uma função, ou seja, um bloco de código que executa alguma operação (você pode escrever linhas de código dentro da função e após isso pode "chama-la" em qualquer parte do código).

`saldovitoria`: nome da função.

`(vitoria, derrota)`: Quando você chama a função, você pode passar valores para esses elementos.

`let`: Cria uma nova variável.

`return resultado`: A palavra-chave `return` é usada para especificar o valor que a função deve retornar para a variável `resultado` nesse caso.

---
```
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
```
> Objetivo principal: Criar a estrutura de Classificação de acordo com o saldo de vitórias com o nível de cada personagem

`let`: Cria uma nova Variável.

`Classificacao`: nome da Variável

`if` ou `else if`: Em inglês `if` significa "Se" e `else if` "Se não", então no código **if (saldo < 10)
        Classificacao = "Ferro"**
estamos na verdade dizendo: 

- Se o saldo de vitórias for menor que 10 a Classificação vai ser igual a Ferro

e no código **else if (saldo <= 20)
            Classificacao = "Bronze"** 
dizemos: 

- Se não for menor que 10 e saldo de vitórias for menor ou igual a 20 a Classificação vai ser igual a Bronze.

---
```
console.log(`O Herói ${nome} tem de saldo de ${saldovitoria(vitoria, derrota)} está no nível ${Classificacao}`)

    }
```
> Objetivo principal: Mensagem final para o nivel de cada personagem

`console.log`: Tudo que quero ver na tela, ou seja, uma mensagem de saída pelo Terminal eu utilizo esse código.
```
(`O Herói ${nome} tem de saldo de ${saldovitoria(vitoria, derrota)} está no nível ${Classificacao}`)
```
Essa parte se utiliza a sintaxe de template string do JavaScript para inserir o nome, o saldo e a classificação do herói na mensagem.

## Conclusão 🐜

Este projeto foi uma experiência incrível que me permitiu explorar a lógica de programação e a linguagem **JavaScript**. Através da criação da Calculadora de Partidas Ranqueadas, pude aplicar conceitos fundamentais de programação, como estruturas de decisão (if e else if), e aprimorar minhas habilidades de resolução de problemas.

Este projeto me ensinou que a programação não é apenas sobre escrever código, mas também sobre pensar criticamente, resolver problemas e criar algo que seja útil e significativo. 

---
//Feito por Luke 🐉//