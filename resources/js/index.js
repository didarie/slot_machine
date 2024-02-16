let credits = 100;
let win = 0;

/*let creditsText = document.querySelector("#creditsText");
let winnerPaidText = document.querySelector("#winnerPaidText");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let game = document.querySelector("#game");
let table = document.querySelector("#table");*/

let reel = ["red-em", "red-fill", "brown-em", "brown-fill", "beige-em", "beige-fill", "blue-em", "blue-fill", "dark-blue-em", "dark-blue-fill"];
let spin = Array.from({length: 3}, () => Math.round(Math.random() * 10));

/*button1.onclick = ;*/
button2.onclick = tableBlock;

function tableBlock() {
    if (game.style.display === "block") {
        game.style.display = "none";
        table.style.display = "block";
    } else {
        table.style.display = "none";
        game.style.display = "block";
    }

}

function spin_reel(reels, spins) {
    console.log(spins);
    let array = spins.map((spin, reel) => reels[reel][spin]);

    for(let a in array) {
        switch (array[a]) {
            case "red-em":
                return "red";
                break;
        }
    }
    return array;
}


console.log(spin_reel([reel, reel, reel], spin));

























/*
function fruit(reels, spins) {
    // Code here
    let array = spins.map((spin, reel) => reels[reel][spin]);
    let score = 0;
    let values = {
        'Wild': 10,
        'Star': 9,
        'Bell': 8,
        'Shell': 7,
        'Seven': 6,
        'Cherry': 5,
        'Bar': 4,
        'King': 3,
        'Queen': 2,
        'Jack': 1

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
    }

    if (sortArray[0] === sortArray[sortArray.length - 1]) {
        score = values[sortArray[0]] * 10;
    } else if (sortArray[0] === sortArray[1]) {
        if (sortArray[sortArray.length - 1] === 'Wild') {
            score = values[sortArray[0]] * 2;
        } else {
            score = values[sortArray[0]];
        }
    }

    winnerPaidText.innerText = score;
};*/
