let nome = prompt("Qual o seu nome?:");
let idade = prompt("Quantos anos você tem?:");
let linguagem = prompt("Qual linguagem de programação você está estudando?:");
let condicao = prompt("Você gosta de estudar ? 1/SIM 2/NÃO ", linguagem);

const msg = `"Olá, ${nome}! Você tem ${idade} anos e já esta aprendendo ${linguagem}"`;
alert(msg);


if(condicao == 1){
alert("Muito bom! Continue estudando e você terá muito sucesso !!!")
}else{
alert("Isso é bem triste..")
}
    