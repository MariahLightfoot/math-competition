function init () {

    let mathProblems = [
        //algebra 1
        {name: "al_1", image: "images/al_1.jpg"},
        {name: "al_2", image: "images/al_2.jpg"},
        {name: "al_3", image: "images/al_3.jpg"},
        {name: "al_4", image: "images/al_4.jpg"},
        {name: "al_5", image: "images/al_5.jpg"},
        {name: "al_6", image: "images/al_6.jpg"},
        {name: "al_7", image: "images/al_7.jpg"},
        {name: "al_8", image: "images/al_8.jpg"},
        {name: "al_9", image: "images/al_9.jpg"},
        {name: "al_10", image: "images/al_10.jpg"},
        {name: "al_11", image: "images/al_11.jpg"},
        {name: "al_12", image: "images/al_12.jpg"},
        {name: "al_13", image: "images/al_13.jpg"},
        {name: "al_14", image: "images/al_14.jpg"},
        {name: "al_15", image: "images/al_15.jpg"},
        {name: "al_16", image: "images/al_16.jpg"},
        {name: "al_17", image: "images/al_17.jpg"},
        {name: "al_18", image: "images/al_18.jpg"},
        {name: "al_19", image: "images/al_19.jpg"},
        {name: "al_20", image: "images/al_20.jpg"},
        {name: "al_21", image: "images/al_21.jpg"},
        {name: "al_22", image: "images/al_22.jpg"},
        {name: "al_23", image: "images/al_23.jpg"},
        {name: "al_24", image: "images/al_24.jpg"},
        {name: "al_25", image: "images/al_25.jpg"},
        {name: "al_26", image: "images/al_26.jpg"},
        {name: "al_27", image: "images/al_27.jpg"},
        {name: "al_28", image: "images/al_28.jpg"},
        {name: "al_29", image: "images/al_29.jpg"},
        {name: "al_30", image: "images/al_30.jpg"},
        {name: "al_31", image: "images/al_31.jpg"},
        {name: "al_32", image: "images/al_32.jpg"},
        {name: "al_33", image: "images/al_33.jpg"},
        {name: "al_34", image: "images/al_34.jpg"},

        //algebra 2
        {name: "al2_1", image: "images/al2_1.jpg"},
        {name: "al2_2", image: "images/al2_2.jpg"},
        {name: "al2_3", image: "images/al2_3.jpg"},
        {name: "al2_4", image: "images/al2_4.jpg"},
        {name: "al2_5", image: "images/al2_5.jpg"},
        {name: "al2_6", image: "images/al2_6.jpg"},
        {name: "al2_7", image: "images/al2_7.jpg"},
        {name: "al2_8", image: "images/al2_8.jpg"},
        {name: "al2_9", image: "images/al2_9.jpg"},
        {name: "al2_10", image: "images/al2_10.jpg"},
        {name: "al2_11", image: "images/al2_11.jpg"},
        {name: "al2_12", image: "images/al2_12.jpg"},
        {name: "al2_13", image: "images/al2_13.jpg"},
        {name: "al2_14", image: "images/al2_14.jpg"},
        {name: "al2_15", image: "images/al2_15.jpg"},
        {name: "al2_16", image: "images/al2_16.jpg"},
        {name: "al2_17", image: "images/al2_17.jpg"},
        {name: "al2_18", image: "images/al2_18.jpg"},
        {name: "al2_19", image: "images/al2_19.jpg"},
        {name: "al2_20", image: "images/al2_20.jpg"},

        //geometry
        {name: "geo_1", image: "images/geo_1.jpg"},
        {name: "geo_2", image: "images/geo_2.jpg"},
        {name: "geo_3", image: "images/geo_3.jpg"},
        {name: "geo_4", image: "images/geo_4.jpg"},
        {name: "geo_5", image: "images/geo_5.jpg"},
        {name: "geo_6", image: "images/geo_6.jpg"},
        {name: "geo_7", image: "images/geo_7.jpg"},
        {name: "geo_8", image: "images/geo_8.jpg"},
        {name: "geo_9", image: "images/geo_9.jpg"},
        {name: "geo_10", image: "images/geo_10.jpg"},

        //precalc
        {name: "precalc_1", image: "images/precalc_1.jpg"},
        {name: "precalc_2", image: "images/precalc_2.jpg"},
        {name: "precalc_3", image: "images/precalc_3.jpg"},
        {name: "precalc_4", image: "images/precalc_4.jpg"},
        {name: "precalc_5", image: "images/precalc_5.jpg"}
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
            document.getElementById("mathProblemImage").src = "images/end.jpg"; 
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