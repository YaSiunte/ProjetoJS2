// LIMPEZA E VALIDAÇÃO

const email="   email@email.com   ";
const emailLimpo= email.trim(); //trim (remove os espaços inicio e fim)
console.log(emailLimpo)

//VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("email válido")
}else{
    console.log("email inválido")
}

// TRANFORMAÇÃO DE TEXTOS 

const tituloArtigo="Como aprender JAVA RAIZ";

//upper(maiusculo) lower(minusculo)
const texto1 = tituloArtigo.toLowerCase();
console.log(texto1)

//split (transforma o texto em array)
const texto2 = tituloArtigo.split(" ")
console.log(texto2)

// join (junta tudo em uma única string)
const texto3 = texto2.join(" ")
console.log(texto3)