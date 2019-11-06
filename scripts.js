function init () {

    let mathProblems = [
        //algebra 1
        {name: "al_1", image: "images/al_1.png"},
        {name: "al_2", image: "images/al_2.png"},
        {name: "al_3", image: "images/al_3.png"},
        {name: "al_4", image: "images/al_4.png"},
        {name: "al_5", image: "images/al_5.png"},
        {name: "al_6", image: "images/al_6.png"},
        {name: "al_7", image: "images/al_7.png"},
        {name: "al_8", image: "images/al_8.png"},
        {name: "al_9", image: "images/al_9.png"},
        {name: "al_10", image: "images/al_10.png"},
        {name: "al_11", image: "images/al_11.png"},
        {name: "al_12", image: "images/al_12.png"},
        {name: "al_13", image: "images/al_13.png"},
        {name: "al_14", image: "images/al_14.png"},
        {name: "al_15", image: "images/al_15.png"},
        {name: "al_16", image: "images/al_16.png"},
        {name: "al_17", image: "images/al_17.png"},
        {name: "al_18", image: "images/al_18.png"},
        {name: "al_19", image: "images/al_19.png"},
        {name: "al_20", image: "images/al_20.png"},
        {name: "al_21", image: "images/al_21.png"},
        {name: "al_22", image: "images/al_22.png"},
        {name: "al_23", image: "images/al_23.png"},
        {name: "al_24", image: "images/al_24.png"},
        {name: "al_25", image: "images/al_25.png"},
        {name: "al_26", image: "images/al_26.png"},
        {name: "al_27", image: "images/al_27.png"},
        {name: "al_28", image: "images/al_28.png"},
        {name: "al_29", image: "images/al_29.png"},
        {name: "al_30", image: "images/al_30.png"},
        {name: "al_31", image: "images/al_31.png"},
        {name: "al_32", image: "images/al_32.png"},
        {name: "al_33", image: "images/al_33.png"},
        {name: "al_34", image: "images/al_34.png"},

        //algebra 2
        {name: "al2_1", image: "images/al2_1.png"},
        {name: "al2_2", image: "images/al2_2.png"},
        {name: "al2_3", image: "images/al2_3.png"},
        {name: "al2_4", image: "images/al2_4.png"},
        {name: "al2_5", image: "images/al2_5.png"},
        {name: "al2_6", image: "images/al2_6.png"},
        {name: "al2_7", image: "images/al2_7.png"},
        {name: "al2_8", image: "images/al2_8.png"},
        {name: "al2_9", image: "images/al2_9.png"},
        {name: "al2_10", image: "images/al2_10.png"},
        {name: "al2_11", image: "images/al2_11.png"},
        {name: "al2_12", image: "images/al2_12.png"},
        {name: "al2_13", image: "images/al2_13.png"},
        {name: "al2_14", image: "images/al2_14.png"},
        {name: "al2_15", image: "images/al2_15.png"},
        {name: "al2_16", image: "images/al2_16.png"},
        {name: "al2_17", image: "images/al2_17.png"},
        {name: "al2_18", image: "images/al2_18.png"},
        {name: "al2_19", image: "images/al2_19.png"},
        {name: "al2_20", image: "images/al2_20.png"},

        //geometry
        {name: "geo_1", image: "images/geo_1.png"},
        {name: "geo_2", image: "images/geo_2.png"},
        {name: "geo_3", image: "images/geo_3.png"},
        {name: "geo_4", image: "images/geo_4.png"},
        {name: "geo_5", image: "images/geo_5.png"},
        {name: "geo_6", image: "images/geo_6.png"},
        {name: "geo_7", image: "images/geo_7.png"},
        {name: "geo_8", image: "images/geo_8.png"},
        {name: "geo_9", image: "images/geo_9.png"},
        {name: "geo_10", image: "images/geo_10.png"},

        //precalc
        {name: "precalc_1", image: "images/precalc_1.png"},
        {name: "precalc_2", image: "images/precalc_2.png"},
        {name: "precalc_3", image: "images/precalc_3.png"},
        {name: "precalc_4", image: "images/precalc_4.png"},
        {name: "precalc_5", image: "images/precalc_5.png"}
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
            document.getElementById("mathProblemImage").src = "images/mascot4.png"; 
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