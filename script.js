// Cool vertical slider with JavaScript || by Sami
// you can download it, and used in your website, it's free

const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const mainSlade = document.querySelector(".main-slide");
const slidesCout = mainSlade.querySelectorAll("div").length;

const container = document.querySelector(".container");

sidebar.style.top = `-${(slidesCout - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener("click", () => {
    changeSlide("up");
});

downBtn.addEventListener("click", () => {
    changeSlide("down");
});

function changeSlide(direction) {
    if (direction === "up") {
        activeSlideIndex++;

        if (activeSlideIndex === slidesCout) {
            activeSlideIndex = 0;
        }
    } else if (direction === "down") {
        activeSlideIndex--;

        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCout -1;
        }
    }

    const height = container.clientHeight;

    mainSlade.style.transform =  `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform =  `translateY(${activeSlideIndex * height}px)`;
}