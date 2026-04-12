let message = "Добро пожаловать в Киото!";
let button = document.getElementById("mainBtn");

function showMessage(){
    console.log(message);
}

showMessage();

button.addEventListener("click", function () {
    console.log("Кнопка нажата!");
});

setTimeout(function() {
    console.log("Прошло 3 секунды");
}, 3000);

function changeText() {
    button.textContent = "Смотрим достопримечательности";
}

setTimeout(changeText, 5000);



