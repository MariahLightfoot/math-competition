//array that houses all of the image files
//function will randomly select an image to display
//when that image is selected, it will be placed into a new array
//conditional will say if in the new array, do not display again

function init () {

    let mathProblems = [
        {name: "a1_1", image: "file:///Users/mariahlightfoot/Documents/Projects/math-competition/images/a1_1.jpg"},
        {name: "a1_2", image: "file:///Users/mariahlightfoot/Documents/Projects/math-competition/images/a1_2.jpg"},
        {name: "a1_3", image: "file:///Users/mariahlightfoot/Documents/Projects/math-competition/images/a1_3.jpg"}
    ]

    let usedMathProblems = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    goodLuckButton.onclick = getRandomMathProblem;
    function getRandomMathProblem(){
        console.log("mathproblems1" + mathProblems);
        
        if(mathProblems.length === 0){
            document.getElementById("mathProblemImage").width = "900";
            document.getElementById("mathProblemImage").src = "file:///Users/mariahlightfoot/Documents/Projects/math-competition/images/end.jpg"; 
        } else {
            let selection = mathProblems[getRandomInt(mathProblems.length)];
            console.log("selection" + selection);
            let extraction = mathProblems.splice(selection, 1);
            usedMathProblems.push(extraction);
            document.getElementById("mathProblemImage").width = "900";
            document.getElementById("mathProblemImage").src = `${selection.image}`;
        }
        console.log("mathproblems2" + mathProblems);
        console.log("usedmathproblems1" + usedMathProblems);
        
        
    }       

   
}

window.onload = init;