let wordsection = document.querySelector(".wordsection");
let lettersection = document.querySelector(".lettersection");
document.getElementById("game-over").addEventListener("click", () => { window.location.reload() })
document.getElementById("won").addEventListener("click", () => { window.location.reload() })

let falseCount = 0;
let filledCount = 0;

let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

alphabetArray.map((letter) => {
    let node = document.createElement("span")
    node.setAttribute("class", "alphabet")
    node.setAttribute("id", letter)
    let letterNode = document.createTextNode(letter)
    node.appendChild(letterNode)
    lettersection.appendChild(node)
})

function game(word) {
    const wordarray = word.split("");
    const wordlength = wordarray.length;
    console.log(wordlength);

    for (let i = 0; i < wordlength; i++) {
        let wordnode = document.createElement("span");
        wordnode.setAttribute("class", "wordletter")
        wordnode.setAttribute("id", i)
        let text = document.createTextNode("");
        wordnode.appendChild(text);
        wordsection.appendChild(wordnode)
    }

    document.querySelectorAll(".alphabet").forEach(each => { each.addEventListener('click', selectLetter) });

    function selectLetter(event) {
        let selectedLetter = event.target.innerText;

        let letterStatus = wordarray.includes(selectedLetter);
        document.getElementById(selectedLetter).classList.add("bg");

        if (letterStatus) {
            let indexes = [];
            for (let i = 0; i < wordarray.length; i++) {
                if (wordarray[i] === selectedLetter)
                    indexes.push(i);
            }

            for (let j = 0; j < indexes.length; j++) {
                document.getElementById(indexes[j]).innerText = wordarray[indexes[j]];
            }
            filledCount = filledCount + indexes.length;

            if (filledCount === wordarray.length) {
                document.querySelector(".win").classList.add("viewwin")
            }
        } else {
            falseCount++;
            console.log(falseCount)
            if (falseCount === 5) {
                document.querySelector(".gameover").classList.add("viewgameover");
                document.getElementById("correctword").innerText = `The correct word was: ${fetchword}`;
            }
        }
        document.getElementById("chancesleft").innerText = 5 - falseCount;
    }
}
game('javascript');