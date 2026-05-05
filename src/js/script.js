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

// MÉTODO toFixed 
const precoProduto = 199.99;
const desconto = 0.15;
const precoFinal = precoProduto * (1 - desconto);
console.log(precoFinal);
console.log(`R$ ${precoFinal.toFixed(2)}`); // `` (template string - contatenação)

// DOM (document object model)
const Titulo = document.getElementById("titulo")

Titulo.innerText = "O DOM mudou o texto";
Titulo.style.color = "pink";

// CRIANDO O APP
const produtos = [
    {nome: "Teclado Mecânico", preco: 300, emPromocao: true},
    {nome: "Mouse Gamer", preco: 150, emPromocao: false},
    {nome: "Monitor Gamer", preco: 1300, emPromocao: true},
    {nome: "Pad Mouse XL", preco: 400, emPromocao: false},
];

const container =document.getElementById("listar-produtos");
const mostrarTotal =document.getElementById("resultado-total");

// Map: transforma um array de objetos em um array de strigs html em css

function todosProdutos(lista){
    mostrarTotal.innerText = "";
    const htmlProdutos = lista.map(item =>`
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: R$ ${item.preco}</p>
            ${item.emPromocao ? '<span class="tag">Promoção</span>':''}
        </div>
        `).join(''); //transorma o array em uma unica string

        container.innerHTML=htmlProdutos;
}

// FILTER: cria uma nova lista apenas com o que selecionou 

function filtrarPromocoes(){
    const promocionais = produtos.filter(item => item.emPromocao);
    todosProdutos(promocionais);
}

// REDUCE: reduz o array a um unico valor (soma dos preços)

function calcularTotal(){
    const total = produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText = `Valor Total R$ ${total}`;
}