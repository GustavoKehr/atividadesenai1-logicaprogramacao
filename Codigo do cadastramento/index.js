let dataAtual = new Date (2022,8,14);
let dataEvento = new Date(2022,11,12);
let participantes = ["Gustavo", "Carlos", "Adriano", "Cintia", "Gabriela"]
let idadedoparticipante = 18;

console.log("----------------------------------------------------------------------------------")
console.log("------------------------------Inicio do cadastramento-----------------------------")
console.log("----------------------------------------------------------------------------------")

if (dataEvento > dataAtual) { 
    console.log("Prosseguir cadastramento para o evento");
 } else { 
    console.log("Cadastremento não autorizado devido a data invalida"); }

console.log("----------------------------------------------------------------------------------")

if (idadedoparticipante >= 18) { 
    console.log("Prosseguir cadastramento para o evento");
} else { 
    console.log ("Idade inválida, não foi possível prosseguir com seu cadastramento"); }

console.log("----------------------------------------------------------------------------------")

if (participantes.length < 100) { 
    console.log(participantes)
    console.log("Prosseguir cadastramento para o evento");
} else { 
    console.log("Cadastramento não autorizado devido ao excesso de cadastros");
 }

console.log("----------------------------------------------------------------------------------")

if (participantes < 100, dataEvento > dataAtual, participantes < 100); {
    console.log("O cadastro pode ser realizado")
    participantes++
    console.log(participantes.length)
}

console.log("-------------------------------Fim do Cadastramento-------------------------------")