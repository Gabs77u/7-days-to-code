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
    interacao = prompt("Você deseja adicionar uma comida na lista de compras ?");
    while (interacao != "sim" && interacao != "nao") { 
	alert(`Operação não reconhecida!`);
        interacao = prompt("Você deseja adicionar uma comida na lista de compras ?");
    }
    if (interacao === "nao"){
        break;
    }
	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
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