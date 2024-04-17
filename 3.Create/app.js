//Student's array 
/*
const learners = [
    {nom: 'Lyne'},
    {nom: 'Dj3y'},
    {nom: 'Zara'},
    {nom: 'Manu le goat'},
    {nom: 'Adrien'},
    {nom: 'NathAmd'},
    {nom: 'Xeless le goat'},
    {nom: 'Caroline'},
    {nom: 'Arnaud'},
    {nom: 'Stacy'},
    {nom: 'Justine'},
    {nom: 'Angel'},
    {nom: 'Dylan'},
    {nom: 'Adca'},
    {nom: 'isabelle'},
    {nom: 'doblaria'},
    {nom: 'Youri'},
    {nom: 'Giovanni le goat de la finance'},
    {nom: 'Iliess le goat'},
    {nom: 'Justine L'},
    {nom: 'Denis'},
    {nom: 'Mohamed'},
    {nom: 'ludovic'},
    {nom: 'Maryam'},
    {nom: 'Julie'},
    {nom: 'Jordan'},
    {nom: 'Tasha'},
    ];

    //Function for generate a random color background 

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
      }

      learners.forEach(function (elem) {
        //Create a new section 
        const section = document.createElement('section') ;

        section.style.backgroundColor = getRandomColor();

    //Create a paragraph for each student
    let paragraph = document.createElement('p');
    paragraph.textContent = elem.nom;

    //Add paragraphs on section 
    section.appendChild(paragraph);
    //Add section on article
    document.querySelector('article').appendChild(section);
}
*/

var backgroundColor = style.backgroundColor;
var textColor;


if (backgroundColor === 'rgba(0,0,0,0)' ||backgroundColor === 'transparent') {
    textColor = '#333';
    backgroundColor = '#fff';

} else {
    textColor = 

}

