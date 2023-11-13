const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['mercury.jpg', 'venus.jpg', 'earth.jpg', 'moon.jpg', 'mars.png']
// 'jupiter.jpg', 'saturn.jpg', 'uranus.jpg', 'neptune.jpg', 'pluto.jpg'];

const alts = {
    'mercury.jpg' : 'the planet Mercury',
    'venus.jpg' : 'the planet Venus',
    'earth.jpg' : 'the planet Earth',
    'moon.jpg' : 'the Moon', 
    'mars.png' : 'the planet Mars'};
 
    //'jupiter.jpg' : "the planet Jupiter",
    //'saturn.jpg' : "the planet Saturn",
    //'uranus.jpg' : "the planet Uranus", 
    //'neptune.jpg' : "the planet Neptune",
    //'pluto.jpg' : "the dwarf planet Pluto"};



/* Declaring the alternative text for each image file */

/* Looping through images */

for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute("src", `${image}`);
    newImage.setAttribute("alt", alts[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", e =>{
        displayedImage.src= e.target.src;
        displayedImage.alt= e.target.alt;
    });

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const attr = btn.getAttribute("class");
    if (attr === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5';
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

});



