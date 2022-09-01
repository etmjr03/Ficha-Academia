const treino1 = document.querySelector("#treino1");
const treino2 = document.querySelector("#treino2");
const container = document.querySelector(".container");

treino2.addEventListener('click', () => {
    container.classList.add("treino2-mode");
});

treino1.addEventListener('click', () => {
    container.classList.remove("treino2-mode");
});