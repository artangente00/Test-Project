function showCart(){
    var ticket = document.getElementById("ticketPage");
    var cart = document.getElementById("cartPage");

    cart.style.display = "block";
    ticket.style.display = "none";
}
function showCheckout(){
    var cart = document.getElementById("cartPage");
    var checkout = document.getElementById("checkoutPage");

    checkout.style.display = "block";
    cart.style.display = "none";
}
function backtoTicket(){
    var ticket = document.getElementById("ticketPage");
    var checkout = document.getElementById("checkoutPage");

    ticket.style.display = "block";
    checkout.style.display = "none";
}