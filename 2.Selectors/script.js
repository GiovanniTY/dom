/*
*/
// Select all elements with the "important" class
const importantElements = document.querySelectorAll(`.important`);
// Iterate over the selected elements and add the "title" attribute
importantElements.forEach(element => {
    element.setAttribute('title', `This is an important item`);
});

//Select all elements <img>
const images = document.querySelectorAll(`img`);

//Iterate on all elements <img>

images.forEach(img => {
    //Check if the img tag doesn't have the "important" class
    if(!img.classList.contains(`important`)) {
        //If the img tag doesn't have the "important" class, hide it by setting the "display" property to "none"
        img.style.display = `none`;
    }
})

// Select all paragraphs 
const paragraphs = document.querySelectorAll('p');
//Iterate on all paragraphs 
paragraphs.forEach(paragraph => {
    //show the contains of paragraphs on console
     console.log('Content of paragraphs:', paragraph.textContent);

    //Check if the paragraph has a class
    if (paragraph.classList.length > 0) {
        // if the paragraphs has a class, display tha class name in the console
        console.log('Paragraph class:', paragraph.classList);
    }

    
});
//Select all paragraphs
const paragraphss = document.querySelectorAll('p');

//Function to generate a random color in hex format
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//Iterate ovver all paraghraphs
paragraphss.forEach(paragraph => {
    //Check if the paragraph has a class 
    if (paragraph.classList.length === 0 ) {
        //if the paragraph doesn't have a class, assign it a random text color
        paragraph.style.color = getRandomColor();
    }
});