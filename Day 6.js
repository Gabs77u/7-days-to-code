const nome = prompt("Me diga seu nome por favor:");
alert(`Ola, ${nome} !`);

//Loop de interação inicial
const intro = prompt("Deseja continuar ?");
if(intro == "sim"){
    alert("Bem vindo(a) a lista de compras !");
}else{
    alert("Insira uma opção válida");
}
const frutas = [];
const laticinios = [];
const doces = [];
const congelados = [];
let comida = "";
let pereciveis= [];
let bebidas = [];
let drogas = [];
let categoria = "";

let interacao = "sim";
while(interacao != "nao"){
    interacao = prompt("Você deseja adicionar ou remover uma comida na lista de compras ?");
    while (interacao != "sim" && interacao != "nao") { 
	alert(`Operação não reconhecida!`);
        interacao = prompt("Você deseja adicionar ou remover uma comida na lista de compras ?");
    }
    if (interacao === "nao"){
        break;
    }
	
    let operacao = prompt("Você deseja adicionar ou remover um valor da lista?");
    while (operacao != "adicionar" && operacao != "remover") { 
	alert(`Operação não reconhecida!`);
        operacao = prompt("Você deseja adicionar ou remover um valor da lista?");
    }
	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        if (operacao === "adicionar"){
            frutas.push(comida);
        } else {
            let index = frutas.indexOf(comida);
            if (index > -1) {
                frutas.splice(index, 1);
            } else {
                alert("Essa comida não foi encontrada na lista.");
            }
        }
    } else if (categoria === 'laticínios'){
        if (operacao === "adicionar"){
            laticinios.push(comida);
        } else {
            let index = laticinios.indexOf(comida);
            if (index > -1) {
                laticinios.splice(index, 1);
            } else {
                alert("Essa comida não foi encontrada na lista.");
            }
        }
    } else if (categoria === 'doces'){
        if (operacao === "adicionar"){
            doces.push(comida);
        } else {
            let index = doces.indexOf(comida);
            if (index > -1) {
                doces.splice(index, 1);
            } else {
                alert("Essa comida não foi encontrada na lista.");
            }
        }
    } else if (categoria === 'congelados'){
        if (operacao === "adicionar"){
            congelados.push(comida);
        } else {
            let index = congelados.indexOf(comida);
            if (index > -1) {
                congelados.splice(index, 1);
            } else {
                alert("Essa comida não foi encontrada na lista.");
            }
        }
    } else {
        alert("Essa categoria não foi definida.");
    }
}
alert(`Lista de compras:
\n Drogas:${drogas}
\n Frutas: ${frutas}
\n Laticínios: ${laticinios}
\n Doces: ${doces}
\n Congelados: ${congelados}
\n Pereciveis: ${pereciveis} 
\n Bebidas: ${bebidas}
\n`);