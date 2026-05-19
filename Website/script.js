// ADD TO CART

function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
        name:name,
        price:price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added To Cart");
}

// DISPLAY CART ITEMS

let cartItems = document.getElementById("cart-items");

if(cartItems){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(function(item){

        total += item.price;

        let row = `
        <tr>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>1</td>
            <td>₹${item.price}</td>
        </tr>
        `;

        cartItems.innerHTML += row;
    });

    document.getElementById("grand-total").innerHTML =
    "Grand Total: ₹" + total;
}

// CLEAR CART

function clearCart(){

    localStorage.removeItem("cart");

    location.reload();
}

// LOGIN FORM

let loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Login Successful");
    });
}

// REGISTER FORM

let registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Registration Successful");
    });
}