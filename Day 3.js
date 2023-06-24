const nome = prompt ("Me diga seu nome, por favor:");
alert (`Olá,${nome}`);
//Interação de Usuario 1
const interacao = prompt(`${nome} ,deseja seguir para a area de Front-End ou Back-End ?`);
alert (`Certo`)
if (interacao === "Front-End"||"Frontend"||"frontend"||"front-end"){
    FrontendOrBackend = prompt("Deseja seguir para a area de React ou Vue ?");
}else if (interacao === "Back-End"||"back-end"||"backend"||"Backend"){
    FrontendOrBackend = prompt("Você quer aprender C# ou Java?");
}
else{
    alert("Insira uma opção valida !!!");
return;
};