const Image1 = document.getElementById('Image1');
const myTitle = document.getElementById('myTitle');
const years = document.getElementById('years'); 
const where = document.getElementById('Wheres')
const state = document.getElementById('States')

let paintings = ["img/painting0.jpg", "img/painting1.jpg", "img/painting2.jpg", "img/painting3.jpg", "img/painting4.jpg", "img/painting5.jpg"];

let titles = ["De rode wijngaard", "De sterrennacht", "Sterrennacht boven de Rh�ne",  "Zonnebloemen", "Boerderij in de Provence"]; 

let year = ["november 1888", "juni 1889", "september 1888", "januari 1889", "september 1888"]

let Place = ["Pesjkinmuseum", "Museum of Modern Art",  "Mus�e d'Orsay", "Neue Pinakothek", "National Gallery of Art" ];
   
let State = ["Moskouw", "New York", "Parijs", "Munchen", "Washington D.C."];

function changeImage(index){
    Image1.src = paintings[index];
    myTitle.innerHTML = titles[index]; 
    years.innerHTML = year[index];
    place.innerHTML = Place[index];
    state.innerHTML = State[index]
}

