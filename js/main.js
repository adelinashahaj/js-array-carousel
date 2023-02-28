
const imagesDom = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

const imageListDom = document.querySelector('.image-list');


let sliderContent = "";


for (let i = 0; i < imagesDom.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesDom[i]}" />
                            </div>`;

    
    sliderContent += newImageWrapper;       
    
}

imageListDom.innerHTML = sliderContent;
