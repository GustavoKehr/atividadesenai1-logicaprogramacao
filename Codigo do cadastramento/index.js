const data = [10];
let participantes = [95];
let datadecadastro = [9];

const idade = [18];
let idadedoparticipante = [18];

console.log("----------------------------------------------------------------------------------")
console.log("------------------------------Inicio do cadastramento-----------------------------")
console.log("----------------------------------------------------------------------------------")

if (data => 10) { console.log("Prosseguir cadastramento para o evento"); }
else if (datadecadastro < 10) { console.log("Cadastremento não autorizado devido a data invalida"); }

console.log("----------------------------------------------------------------------------------")

if (idadedoparticipante => 18) { console.log("Prosseguir cadastramento para o evento"); }
else if (idadedoparticipante < 18) { console.log ("Idade inválida, não foi possível prosseguir com seu cadastramento"); }

console.log("----------------------------------------------------------------------------------")

if (participantes < 100) { console.log("Prosseguir cadastramento para o evento"); }
else if (participantes > 100) { console.log("Cadastramento não autorizado devido ao excesso de cadastros"); }

console.log("----------------------------------------------------------------------------------")

if (participantes < 100, data > datadecadastro, participantes < 100); {
    console.log("O cadastro pode ser realizado")
    participantes++
    console.log(participantes)
}

console.log("-------------------------------Fim do Cadastramento-------------------------------")