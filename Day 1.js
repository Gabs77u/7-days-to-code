let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

let teste1(numeroUm == stringUm);
if(teste1) {
    document.getElementById("teste1").innerHTML = 'As variaveis tem o mesmo valor, mas são tipos diferentes'
} else {
    console.log('As variaveis não tem o mesmo valor')
}

let teste2(numeroTrinta === stringTrinta);
if(teste2){
    document.getElementById("teste2").innerHTML = 'As variaveis tem o mesmo valor e mesmo tipo'
} else {
    console.log('As variaveis não tem o mesmo tipo')
}

let teste3(numeroUm == stringUm);
if(teste3){
    document.getElementById("teste3").innerHTML = 'As variaveis tem o mesmo valor, mas tipos diferentes'
} else {
    console.log('As variaveis não tem o mesmo valor')
}