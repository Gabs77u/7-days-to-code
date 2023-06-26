const nome = prompt("Me diga seu nome por favor:");
alert(`Ola, ${nome} !`);
const cursos = prompt(`${nome}, deseja seguir para a área de Front-End ou Back-End?`); 
alert(`Você escolheu a área de ${cursos}.`);
let linguagem = "";
if (cursos == "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (cursos == "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
}
const Fullstack = prompt(`${nome}, digite SIM OU NAO se voce deseja se especializar em ${linguagem} ? Ou deseja se tornar Fullstack ?`);
alert(`Voce decidiu seguir pelo caminho ${Fullstack}`);
let escolha = "";
if(Fullstack == "sim"){
    escolha = alert(`Continue se especializando em ${linguagem} para dominar a área de ${cursos}!`);
}else if(Fullstack == "nao"){
    escolha = alert(`Então voce precisa aprender outras linguagens alem de ${linguagem} se você quer se tornar Fullstack`);
}else{
    alert("Não foi possível identificar sua resposta.");
}
const interacao= prompt("Tem mais algo que você gostaria de aprender ?");
while (interacao === "sim"){
    let tec = prompt("O que ?");
    alert(`Realmente ${nome},${tec} é bem interessante...`);
    interacao = prompt("Tem mais algo que você gostaria de aprender ?");
    break;
}
