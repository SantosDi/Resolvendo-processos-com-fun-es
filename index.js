

//Calculando o icms
function icms() {
    let custo = parseFloat(prompt('Digite o custo do produto:'));
    let precoIcms = custo * 18/100;
    alert('O preço do icms é: R$' + precoIcms);
};

icms();

//Verificando se os numeros sao multiplos
function multiplos(){
    let n1 = prompt("Digite o primeiro numero: ");
    let n2 = prompt("Digite o segundo numero: ");

    if ((n1%n2) === 0) {
        alert("O numero "+ n1 + ' é multiplo do numero ' + n2);
    } else if ((n2%n1) === 0) {
        alert("O numero "+ n2 + ' é multiplo do numero ' + n1);
    } else {
        alert("O numero "+ n1 + ' nao é multiplo do numero ' + n2);
    }
}

multiplos();

//Verificando se a meta de vendas foi batida
function meta(){
    let objetivo = parseFloat(prompt('Informe a meta diaria da sua loja em R$:'));
    let venda = parseFloat(prompt('Informe o valor vendido hoje:'));

    if (venda >= objetivo){
        var dif1 = venda - objetivo 
        alert('Otima noticia! A meta diaria foi batida! Passando R$' + dif1 + ' da meta.');
    } else {
        var dif2 = objetivo - venda 
        alert('Puxa! A meta diaria nao foi batida! Ficou faltando R$' + dif2 + ' para alcançar a meta.');
    }
}

meta();
