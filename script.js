let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.textContent = "Stwórz listę";
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElement)

}

const createLiElement = () => {

}

init()