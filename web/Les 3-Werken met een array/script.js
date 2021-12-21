const Image1 = document.getElementById('Image1');
const myTitle = document.getElementById('myTitle');
const years = document.getElementById('years'); 
const Place = document.getElementById('Place')
const state = document.getElementById('state')

let paintings = ["img/painting0.jpg", 
                "img/painting1.jpg", 
                "img/painting2.jpg", 
                "img/painting3.jpg", 
                "img/painting4.jpg", 
                "img/painting5.jpg"];

let titles = ["De rode wijngaard", 
            "De sterrennacht", 
            "Sterrennacht boven de Rh�ne",  
            "Zonnebloemen", 
            "Boerderij in de Provence"]; 

let year = ["november 1888", 
            "juni 1889", 
            "september 1888", 
            "januari 1889", 
            "september 1888"]

let Places = ["Pesjkinmuseum", 
            "Museum of Modern Art",  
            "Mus�e d'Orsay", 
            "Neue Pinakothek", 
            "National Gallery of Art" ];
   
let States = ["Moskouw", 
            "New York", 
            "Parijs", 
            "Munchen", 
            "Washington D.C."];

function changeImage(index){
    state.innerHTML = States[index];
    Place.innerHTML = Places[index];
    years.innerHTML = year[index];
    myTitle.innerHTML = titles[index]; 
    Image1.src = paintings[index];
}