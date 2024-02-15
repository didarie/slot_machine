let reel = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];

let spin = Array.from({length: 3}, () => Math.round(Math.random() * 11));


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

    return score;
}

console.log(fruit([reel, reel, reel], spin));
