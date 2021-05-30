
const paragraphs = document.querySelectorAll('main  p');

for (const paragraph of paragraphs) {
paragraph.classList.add('red-text');
}


const asideParagraphs = document.querySelectorAll('aside  p');
const aside = document.querySelectorAll('aside');



for (const paragraph of asideParagraphs) {
    paragraph.remove();
    }
    


let title1 = document.createElement("h3");
let title1Text = document.createTextNode("Title 1");
title1.appendChild(title1Text);

