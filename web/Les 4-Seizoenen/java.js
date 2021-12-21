const myTitle = document.getElementById('myTitle');
const myImg = document.getElementById('myImg');

let seizoenen = [
    {
        "title":"Seizoenen",
        "img":"img/seasons.jpg",
        "backGround":"gray",
    },
    {
        "title":"Lente",
        "img":"img/spring.jpg",
        "backGround":"green", 
    },
    {
        "title":"Zomer",
        "img":"img/summer.jpg",
        "backGround":"yellow",
    },
    {
        "title":"Herfst",
        "img":"img/autumn.jpg",
        "backGround":"brown",
    },
    {
        "title":"Winter",
        "img":"img/winter.jpg",
        "backGround":"lightblue",
    },
];

function show(index){

    myTitle.innerHTML = seizoenen[index].title;
    myImg.src = seizoenen[index].img;

    document.body.style.backgroundColor = seizoenen[index].backGround;
}


//let seizoen = {
//    "title":"lente",
//    "img":"img/spring.jpg"
// }; 
