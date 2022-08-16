let dataAtual = new Date (2022,7,14);
let dataISODataHoraTmz = new Date("2022-12-12T15:00:00-03:00");
let participantes = ["Gustavo", "Carlos", "Adriano", "Cintia", "Gabriela"];
let idadedoparticipante = 18;

console.log("----------------------------------------------------------------------------------")
console.log("------------------------------Inicio do cadastramento-----------------------------")
console.log("-------------" + dataAtual + "-----------")
console.log("----------------------------------------------------------------------------------")

if (dataISODataHoraTmz > dataAtual) { 
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

do {participantes.push("Márcio")
    console.log(participantes)
    
} while (participantes < 100, dataISODataHoraTmz > dataAtual, participantes < 100);

console.log("----------------------------------------------------------------------------------")


for (let index = 0; index < participantes.length; index++) {
    console.log(index);
    if (index  == 0 ) {console.log(participantes[index] + " Organizador do Evento");

}   else if (index % 2 == 0) {
    console.log(participantes[index] + " Palestrante")
}
    else {
    console.log(participantes[index] + " Participante")

}
    
}

console.log("--------------------------------Cadastro realizado--------------------------------")

console.log("----------------------------------------------------------------------------------")
console.log("-------------------------------Fim do Cadastramento-------------------------------")
console.log("---" + "📅 Data do Evento ( " + dataISODataHoraTmz + "-")
console.log("----------------------------------------------------------------------------------")
