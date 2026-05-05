
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



