let img = document.querySelector("#qrImg");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", generateQR);

function generateQR(){
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}