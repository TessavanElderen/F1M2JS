const myTitle = document.getElementById("myTitle");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myInput");

let locaties = [
    {
        "title":"plaats 0",
        "image":"img/0.jpg"
    },
    {
        "title":"plaats 1",
        "image":"img/1.jpg"
    },
    {
        "title":"plaats 2",
        "image":"img/2.jpg"
    },
    {
        "title":"plaats 3",
        "image":"img/3.jpg"
    },
    {
        "title":"plaats 4",
        "image":"img/4.jpg"
    },
    {
        "title":"plaats 5",
        "image":"img/5.jpg"
    },
    {
        "title":"plaats 6",
        "image":"img/6.jpg"
    },
    {
        "title":"plaats 7",
        "image":"img/7.jpg"
    },
    {
        "title":"plaats 8",
        "image":"img/8.jpg"
    },
    {
        "title":"plaats 9",
        "image":"img/9.jpg"
    },
    {
        "title":"plaats 10",
        "image":"img/10.jpg"
    },
    {
        "title":"plaats 11",
        "image":"img/11.jpg"
    }
];

function show(index){
    myTitle.innerHTML = locaties[index].title;
    myImg.src = locaties[index].image;
}

function getInput(){
    show(myInput.value); 
    myInput.value = "";
    myInput.focus();
}
