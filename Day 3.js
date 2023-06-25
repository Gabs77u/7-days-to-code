let nome = prompt("Me diga seu nome, por favor:");
alert(`Olá, ${nome}!`);
let materias = "";  
const frontend = []; 
const backend = []; 
const cursos = prompt(`${nome}, deseja seguir para a área de Front-End ou Back-End?`); 
alert(`Você escolheu a área de ${cursos}.`); 
let interacao = "sim"; 
while (interacao !== "não") { 
  interacao = prompt("Deseja continuar?"); 
  while (interacao !== "sim" && interacao !== "não") { 
    alert("Opção inválida!"); 
    interacao = prompt("Deseja continuar?"); 
  }
  if (interacao === "não") { 
    break; 
  }
  if (cursos === "Front-End"){ 
    let escolhaFrontend = prompt("Deseja seguir para a área de React ou Vue?"); 
    if (escolhaFrontend === "React" || escolhaFrontend === "Vue") { 
      frontend.push(escolhaFrontend); 
      console.log(frontend); 
    }else{ 
      alert("Opção inválida!");
    } 
  } else if (cursos === "Back-End") { 
    let escolhaBackend = prompt("Você quer aprender C# ou Java?"); 
    if (escolhaBackend === "C#" || escolhaBackend === "Java") { 
      backend.push(escolhaBackend); 
      console.log(backend); } 
      else { 
        alert("Opção inválida!");
       } 
      }
      especializacao = prompt(`Deseja continuar se especializando em ${materias} para dominar a área de ${cursos}?`);
      if (especializacao === "sim") { 
        alert(`Continue se especializando em ${materias} para dominar a área de ${cursos}!`);
       } 
       else
      { 
      alert(`Chegou a hora de começar a aprender outras linguagens além de ${materias} se você quer se tornar Fullstack!`);
    }
  }
let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
  while (msg === "ok"){
      let novaTecnologia = prompt("Qual?");
      alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
      msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
  }