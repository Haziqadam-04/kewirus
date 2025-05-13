const products = [
    { id: 1, name: "Almond", price: 25000, image: "image/almond.jpeg" },
    { id: 2, name: "Beige", price: 25000, image: "image/beige.jpeg" },
    { id: 3, name: "Biscoff", price: 25000, image: "image/biscoff.jpeg" },
    { id: 4, name: "Burgundy", price: 25000, image: "image/burgundy.jpeg" },
    { id: 5, name: "Choco", price: 25000, image: "image/choco.jpeg" },
    { id: 6, name: "Coffee", price: 25000, image: "image/coffee.jpeg" },
    { id: 7, name: "Cream", price: 25000, image: "image/cream.jpeg" },
    { id: 8, name: "Denim", price: 25000, image: "image/denim.jpeg" },
    { id: 9, name: "Green Tea", price: 25000, image: "image/greentea.jpeg" },
    { id: 10, name: "Khaki", price: 25000, image: "image/khaki.jpeg" },
    { id: 11, name: "Mauve", price: 25000, image: "image/mauve.jpeg" },
    { id: 12, name: "Milky", price: 25000, image: "image/milky.jpeg" },
    { id: 13, name: "Navy", price: 25000, image: "image/navy.jpeg" },
    { id: 14, name: "Nude", price: 25000, image: "image/nude.jpeg" },
    { id: 15, name: "Nude Pink", price: 25000, image: "image/nudepink.jpeg" },
    { id: 16, name: "Olive", price: 25000, image: "image/olive.jpeg" },
    { id: 17, name: "Peanut", price: 25000, image: "image/peanut.jpeg" },
    { id: 18, name: "Pink Salt", price: 25000, image: "image/pinksalt.jpeg" },
];

const cart = [];

function displayProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Rp ${product.price.toLocaleString()}</p>
                <button onclick="addToCart(${product.id})">Tambahkan ke Keranjang</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} telah ditambahkan ke keranjang!`);
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
    document.getElementById("cart-modal").style.display = "flex";
    updateCart();
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <li>${item.name} - Rp ${item.price.toLocaleString()} 
                <button onclick="removeFromCart(${index})">Hapus</button>
            </li>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }
    document.getElementById("checkout-modal").style.display = "flex";
}

function closeCheckout() {
    document.getElementById("checkout-modal").style.display = "none";
}

function payQRIS() {
    document.getElementById("checkout-modal").style.display = "none";
    document.getElementById("qris-modal").style.display = "flex";
}

function closeQRIS() {
    document.getElementById("qris-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const qrisModal = document.getElementById("qris-modal");
    const checkoutModal = document.getElementById("checkout-modal");
    const cartModal = document.getElementById("cart-modal");

    qrisModal.style.display = "none";
    checkoutModal.style.display = "none";
    cartModal.style.display = "none";

    document.getElementById("cart-icon").addEventListener("click", openCart);
    document.getElementById("checkout-btn").addEventListener("click", checkout);
    document.getElementById("pay-btn").addEventListener("click", payQRIS);
    document.getElementById("close-qris").addEventListener("click", closeQRIS);
    document.querySelector("#checkout-modal .close").addEventListener("click", closeCheckout);
    document.querySelector("#cart-modal .close").addEventListener("click", closeCart);
});

displayProducts();
