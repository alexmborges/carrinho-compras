let valorTotal;
limpar();

function adicionar() {
// Recuperando valores
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnid = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

// Calcular o preço, o subtotal
let preco = quantidade * valorUnid;

// Add ao carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`; 

// Atualizar o valor total
valorTotal = valorTotal + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${valorTotal}`;
document.getElementById('quantidade').value = 0;

}

// Limpando os campos 
function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';

}


