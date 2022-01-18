const myTitle = document.getElementById("myTitle");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById("knopNoord");
const knopOost = document.getElementById("knopOost");
const knopZuid = document.getElementById("knopZuid");
const knopWest = document.getElementById("knopWest");


let directionButtons = {
    "noord": document.getElementById("knopNoord"),
    "oost":  document.getElementById("knopOost"),
    "zuid":  document.getElementById("knopZuid"),
    "west":  document.getElementById("knopWest")
}


let current_index = 0; 

let locaties = [
    {
        "title":"plaats 0",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1
        }
    },

    {
        "title":"plaats 1",
        "image":"img/1.jpg",
        "directions": {
            "noord": 0, 
            "oost":  5, 
            "zuid":  4, 
            "west":  2
        }
    },

    {
        "title":"plaats 2",
        "image":"img/2.jpg",
        "directions": {
            "oost":  1,   
            "zuid":  3
        }
    },

    {
        "title":"plaats 3",
        "image":"img/3.jpg", 
        "directions": {
            "noord": 2
        }
    },

    {
        "title":"plaats 4",
        "image":"img/4.jpg",
        "directions": {
            "noord": 1
        }
    },

    {
        "title":"plaats 5",
        "image":"img/5.jpg",
        "directions": {
            "noord": 10, 
            "oost":  6, 
            "west":  1
        }
    },

    {
        "title":"plaats 6",
        "image":"img/6.jpg",
        "directions": {
            "oost":  7, 
            "zuid":  11, 
            "west":  5
        }
    },

    {
        "title":"plaats 7",
        "image":"img/7.jpg", 
        "directions": {
            "noord":  9, 
            "zuid":   8, 
            "west":   6
        }
    },

    {
        "title":"plaats 8",
        "image":"img/8.jpg",
        "directions": {
            "noord": 7
        }
    },

    {
        "title":"plaats 9",
        "image":"img/9.jpg", 
        "directions": {
            "zuid":  7,
            "west":  10
        }
    },

    {
        "title":"plaats 10",
        "image":"img/10.jpg", 
        "directions": {
           "oost":  9, 
           "zuid":  5
        }
    },

    {
        "title":"plaats 11",
        "image":"img/11.jpg",
        "directions": {
            "noord": 6
        }
    }
];

function show(index){
    myTitle.innerHTML = locaties[index].title;
    myImg.src = locaties[index].image;
    current_index = index;

    updateDirections()
}

function updateDirections(){
    let possible = locaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons); 

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
        document.getElementById('sound1').play();
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}



function getInput(){
    show(myInput.value); 
    myInput.value = "";
    myInput.focus();
}
function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    console.log(punt_index);
    show(punt_index); 
}

show(0); 

