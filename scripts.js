//array that houses all of the image files
//function will randomly select an image to display
//when that image is selected, it will be placed into a new array
//conditional will say if in the new array, do not display again

function init () {

    let mathProblems = [
        {name: "a1_1", image: "images/a1_1.jpg"},
        {name: "a1_2", image: "images/a1_2.jpg"},
        {name: "a1_3", image: "images/a1_3.jpg"}
    ]

    let usedMathProblems = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    goodLuckButton.onclick = getRandomMathProblem;
    function getRandomMathProblem(){
        console.log("OG " + mathProblems);
        
        if(mathProblems.length === 0){
            document.getElementById("mathProblemImage").width = "900";
            document.getElementById("mathProblemImage").src = "file:///Users/mariahlightfoot/Documents/Projects/math-competition/images/end.jpg"; 
        } else {
            let randomNumber = getRandomInt(mathProblems.length);
            let selection = mathProblems[randomNumber];
            console.log("selection " + selection.name);
            let extraction = mathProblems.splice(randomNumber, 1);
            usedMathProblems.push(extraction);
            console.log("extraction " + extraction);
            document.getElementById("mathProblemImage").width = "900";
            document.getElementById("mathProblemImage").src = `${selection.image}`;
        }
        console.log("OG-aftermath " + mathProblems);
        console.log("USED " + usedMathProblems);
        
        
    }       

   
}

window.onload = init;