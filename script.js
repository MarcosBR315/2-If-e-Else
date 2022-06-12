let idade = 19;
let humano = true;
let niver = "Janeiro";

if(idade >= 18){
    console.log("Acesso permitido, você tem: ", idade, " anos de idade.");
}else{
    console.log("Acesso negado, você é menor do que 18 anos de idade.");
};

if((idade >= 18) && (humano == true)){
    console.log("Você é um humano maior de idade!");
}else{
    console.log("Acesso negado!");
};

if((niver = "Janeiro") || (niver = "Dezembro")){
    console.log("Parabéns, você faz aniversário em", niver);
}else{
    console.log("Não sei quando é seu aniversáio e nem quero saber!")
}