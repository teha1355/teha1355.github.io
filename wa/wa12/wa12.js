const newBtn= document.querySelector('#js-new-insult').addEventListener('click', getInsult);



const insultText= document.querySelector('#js-insult-text');

const url = 'https://shakespeare1.p.rapidapi.com/shakespeare/generate/insult?limit=10';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '45cf033541mshed795bbd11e0addp13ed6djsnb57862b44e8c',
        'X-RapidAPI-Host': 'shakespeare1.p.rapidapi.com'
    }
};

const images= ['640px-Lady_Macbeth_by_Alfred_Stevens.jpg', 'hamlet.jpg', 'caesar.jpg', 'shrew.jpg', 'richard.jpg', 'juliet.jpg', 'Much_Ado_About_Nothing_by_Alfred_Elmore_1846.jpg', 'othello.jpg'];



async function getInsult() {

    try {
	    const response = await fetch(url, options);
	    const result = await response.text();
	    console.log(result);
        const insult = JSON.parse(result.slice(result.indexOf('{')))
        const insult1= insult['contents'];
        const insult2= insult1['taunts'];
        console.log(insult2);
        displayInsult(insult2);
    } catch (error) {
	    console.error(error);
    }


    const img= document.getElementById('image');
    const random= images[Math.floor(Math.random() * images.length)];
    console.log(random);

    img.src= random;
    

}

function displayInsult(insult) {
    let random= randomElement = insult[Math.floor(Math.random() * insult.length)];
    insultText.textContent = random;
}


