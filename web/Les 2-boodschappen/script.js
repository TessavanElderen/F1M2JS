console.log("hallo allemaal!!")

const groentevak = document.getElementById('Groente lade')
const fruitvak = document.getElementById('Fruit lade')

function zetInFruitLade(fruit){
    console.log(fruit)

    const nieuwElement = document.createElement('h2')
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'rood'; 
    fruitvak.appendChild(nieuwElement)
}

function zetInGroenteLade(groente){
    console.log(groente)

    const nieuwElement = document.createElement('h2')
    nieuwElement.innerHTML = groente; 
    nieuwElement.className = 'groen'; 
    groentevak.appendChild(nieuwElement)
}
