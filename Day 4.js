const numeroAdivinhacao = Math.ceil(Math.random() * 10);
const acertou = false;
let tentativas = 5;
let chute = "";

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