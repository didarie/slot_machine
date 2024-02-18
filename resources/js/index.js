let credits = 100;

let creditsText = document.querySelector("#creditsText");
let winnerPaidText = document.querySelector("#winnerPaidText");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let game = document.querySelector("#game");
let table = document.querySelector("#table");
let arrayReels = Array.from(document.getElementsByTagName("li"));
let reel = ["red-em", "red-fill", "brown-em", "brown-fill", "beige-em", "beige-fill", "blue-em", "blue-fill", "dark-blue-em", "dark-blue-fill"];

button1.onclick = () => spin_reel([reel, reel, reel]);
button2.onclick = tableBlock;
button3.onclick = gameBlock;

function tableBlock() {
    game.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    table.style.display = "block";
    button3.style.display = "block";
}

function gameBlock() {
    table.style.display = "none";
    button3.style.display = "none";
    game.style.display = "block";
    button1.style.display = "block";
    button2.style.display = "block";
}

function spin_reel(reels) {
    let spins = Array.from({ length: 3 }, () => Math.round(Math.random() * 9));
    let array = spins.map((spin, reel) => reels[reel][spin]);
    let score = 0;
    let values = {
        'red-em': 10,
        'red-fill': 9,
        'brown-em': 8,
        'brown-fill': 7,
        'beige-em': 6,
        'beige-fill': 5,
        'blue-em': 4,
        'blue-fill': 3,
        'dark-blue-em': 2,
        'dark-blue-fill': 1
    };

    let sortArray = sortElement(array);

    function sortElement(arr) {
        let count = {};

        arr.forEach(element => {
            if (count[element]) {
                count[element] += 1;
            } else {
                count[element] = 1;
            }
        });

        return arr.sort((a, b) => count[b] - count[a]);
    };


    if (sortArray[0] === sortArray[sortArray.length - 1]) {
        score = values[sortArray[0]] * 10;
    } else if (sortArray[0] === sortArray[1]) {
        if (sortArray[sortArray.length - 1] === 'red-em') {
            score = values[sortArray[0]] * 2;
        } else {
            score = values[sortArray[0]];
        }
    };

    for (let a in array) {
        switch (array[a]) {
            case "red-fill":
                arrayReels[a].style.cssText = "background-color: #F55400; border-color: transparent";
                break;
            case "red-em":
                arrayReels[a].style.cssText = "background-color: transparent; border-color: #F55400";
                break;
            case "brown-fill":
                arrayReels[a].style.cssText = "background-color: #8C5A4F; border-color: transparent";
                break;
            case "brown-em":
                arrayReels[a].style.cssText = "background-color: transparent; border-color: #8C5A4F";
                break;
            case "beige-fill":
                arrayReels[a].style.cssText = "background-color: #BF9C8F; border-color: transparent";
                break;
            case "beige-em":
                arrayReels[a].style.cssText = "background-color: transparent; border-color: #BF9C8F";
                break;
            case "blue-fill":
                arrayReels[a].style.cssText = "background-color: #66708C; border-color: transparent";
                break;
            case "blue-em":
                arrayReels[a].style.cssText = "background-color: transparent; border-color: #66708C";
                break;
            case "dark-blue-fill":
                arrayReels[a].style.cssText = "background-color: #2F3A59; border-color: transparent";
                break;
            case "dark-blue-em":
                arrayReels[a].style.cssText = "background-color: transparent; border-color: #2F3A59";
                break;
            default:
                arrayReels[a].style["border-color"] = "#3D3D3D";
                break;

        };
    };

    creditsText.innerText = credits -= 3;
    winnerPaidText.innerText = score;
    creditsText.innerText = credits += score;
};