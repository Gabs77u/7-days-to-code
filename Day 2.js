let Nome = prompt("Qual o seu nome?:");
let Idade = prompt("Quantos anos você tem?:");
let Linguagem = prompt("Qual linguagem de programação você está estudando?:");
let Condicao = prompt("Você gosta de estudar ", Linguagem, "? Responda com o número 1 para SIM ou 2 para NÃO.:");

const msg = `"Olá, ${Nome}! Você tem ${Idade} anos e já esta aprendendo ${Linguagem}"`;
alert(msg);


if(Condicao == 1){
alert("Muito bom! Continue estudando e você terá muito sucesso !!!")
}else{
alert("Ahh que pena... Já tentou aprender outras linguagens ?!")
}
    