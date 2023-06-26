const nome = prompt("Me diga seu nome por favor:");
alert(`Ola, ${nome} !`)

let intro = ""
alert(`Bem vindo ${nome}, vamos jogar ?`)

const numeroAdivinhacao = Math.ceil(Math.random() * 10);
const acertou = false;
let chute = "";
let tentativas = 5;
while (tentativas > 0) {
    chute = prompt(`Tente adivinhar o número de 0 a 10. Você tem ${tentativas} tentativa(s):`);
    if (chute === numeroAdivinhacao) {
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errooooou!!!");
    tentativas--;
}
if (!acertou) {
    alert(`Fim do jogo, o numero era ${numeroAdivinhacao}! Mais sorte da proxima vez`);
}