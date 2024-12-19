const background = document.getElementById("background");
const numberOfDivs = 20;

for(let i = 0; i < numberOfDivs; i++){
    const div = document.createElement("div");
    div.className = "interactive-area";

    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;

    div.style.top = `${randomTop}%`;
    div.style.left = `${randomLeft}%`;

    background.appendChild(div);

    
}


div.className = "life-sign";
div.addEventListener("click", () => {
    div.style.backgroundColor = "yellow";
    div.style.pointerEvents = "none";
    checkAllClicked();
}
)