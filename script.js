const elements = document.getElementsByClassName('el');

function createRandColor() {
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    return "rgb(" + c1 + ", " + c2 + ", " + c3 + ")";
}

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
        elements[i].style.color = createRandColor();
        console.log("el" + i + " clicked");
    });
}