const nome = prompt ("Me diga seu nome, por favor");

let inter1 = prompt (`Ola ${nome}, vamos dar inicio aos seus estudos ? SIM ou NÃO`);
while (inter1 === ""){
    inter1 = alert(`Boa escolha`);
}

const area = prompt("Você quer seguir para a área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Insira uma opção valida !!!");
}

const fullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (fullstack == 1){
    alert(`Especialize se em ${linguagem} para dominar a área de ${area}!`);
}
else if (fullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else{
    alert("Insira uma opção valida !!!");
}

let msg = prompt("Tem mais alguma linguagem, ferramenta ou tecnologia que você gostaria de aprender? Digite 'ok' se sim.");
while (msg === "ok"){
    let tec = prompt("Qual?");
    alert(`${tec} isso é bem interessante!`)
    msg = prompt("Existe mais algo que queira aprender? Digite 'ok' se im.");
}