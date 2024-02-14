<>
// Funções JavaScript simples para manipular o carrinho de compras//</>


var cartItems = [];
var cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;

    // Atualizar a exibição do carrinho
    updateCartView();
}

function updateCartView() {
    var cartItemsElement = document.getElementById('cart-items');
    var cartTotalElement = document.getElementById('cart-total');

    // Limpar itens antigos
    cartItemsElement.innerHTML = '';

    // Adicionar itens atualizados
    cartItems.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' - R$' + item.price.toFixed(2);
        cartItemsElement.appendChild(li);
    });

    // Atualizar o total
    cartTotalElement.textContent = 'R$' + cartTotal.toFixed(2);
}

function checkout() {
    alert('Compra realizada com sucesso! Total: R$' + cartTotal.toFixed(2));

    // Limpar carrinho após o checkout
    cartItems = [];
    cartTotal = 0;

    // Atualizar a exibição do carrinho
    updateCartView();
}
