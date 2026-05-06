
const caruselContainer = document.querySelector("#carusel");
const images = Array.from(caruselContainer.children);

const forwardButton = document.querySelector("#forward");
const backButton = document.querySelector("#back");

let currentIndex = 0;

const showImage = (index) => {
    images[currentIndex].classList.remove("current");
    currentIndex = index;
    images[currentIndex].classList.add("current");
}

const forward = () => {
    let nextIndex = currentIndex + 1;

    if (nextIndex >= images.length){
        nextIndex = 0;
    }

    showImage(nextIndex);

}

const back = () => {
    let prevIndex = currentIndex - 1;

    if (prevIndex < 0){
        prevIndex = images.length - 1;
    }

    showImage(prevIndex)
}

forwardButton.addEventListener("click", forward);
backButton.addEventListener("click", back);


const form = document.querySelector("#form")

const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const messageInput = document.querySelector("#message")

const nameError = document.querySelector("#name-error")
const emailError = document.querySelector("#email-error")
const messageError = document.querySelector("#message-error")


nameInput.addEventListener("input", () => {

    nameError.classList.add("hidden")

    nameInput.classList.remove("error")

})


emailInput.addEventListener("input", () => {

    emailError.classList.add("hidden")

    emailInput.classList.remove("error")

})


messageInput.addEventListener("input", () => {

    messageError.classList.add("hidden")

    messageInput.classList.remove("error")

})



form.addEventListener("submit", (e) => {

    e.preventDefault()

    const formData = new FormData(form)

    const name = formData.get("name").trim()
    const email = formData.get("email").trim()
    const message = formData.get("message").trim()

    let isValid = true


    if(name.length < 4) {

        nameError.classList.remove("hidden")

        nameInput.classList.add("error")

        isValid = false
    }


    if(!email.includes("@")) {

        emailError.classList.remove("hidden")

        emailInput.classList.add("error")

        isValid = false
    }


    if(message.length < 10) {

        messageError.classList.remove("hidden")

        messageInput.classList.add("error")

        isValid = false
    }


    if(isValid) {

        alert("Форма успешно отправлена")

    }

})
