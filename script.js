const form = document.getElementById("formulario")
let contatos = "";
const apagar = document.getElementById("apagaTudo")
const tabela = document.querySelector("tbody");
apagar.addEventListener("click", function(e){
    tabela.innerHTML ="";
    contatos = "";
});
form.addEventListener("submit", function(e) {
    e.preventDefault();
    novocontato();
    adicionaContatos();
});
function novocontato() {
    const entraNomePessoa = document.getElementById("nome_pessoa");
    const entraNumeroPessoa = document.getElementById("numero_pessoa");
    const entraEmailPessoa = document.getElementById("email_pessoa");

    let contato = "<tr>";
    contato += `<td>${entraNomePessoa.value}</td>`;
    contato += `<td>${entraNumeroPessoa.value}</td>`;
    contato += `<td>${entraEmailPessoa.value}</td>`;
    contato += "</tr>";
    
    contatos += contato;

    entraNomePessoa.value = "";
    entraNumeroPessoa.value = "";
    entraEmailPessoa.value = "";

}
function adicionaContatos() {
    tabela.innerHTML = contatos;
}

