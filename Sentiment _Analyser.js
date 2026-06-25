function analyzeSentiment(){

let text=document.getElementById("textInput").value.toLowerCase();

const positiveWords=[

"good",
"great",
"excellent",
"awesome",
"love",
"happy",
"nice",
"amazing",
"fantastic",
"wonderful",
"best",
"beautiful",
"perfect",
"super",
"enjoy"

];

const negativeWords=[

"bad",
"worst",
"hate",
"terrible",
"awful",
"sad",
"angry",
"poor",
"boring",
"ugly",
"problem",
"annoying",
"pain",
"disappointed"

];

let positiveScore=0;
let negativeScore=0;

positiveWords.forEach(function(word){

    if(text.includes(word)){

        positiveScore++;

    }

});

negativeWords.forEach(function(word){

    if(text.includes(word)){

        negativeScore++;

    }

});

let output=document.getElementById("output");

if(text.trim()==""){

    output.innerHTML="Please enter some text.";

    output.style.color="black";

}

else if(positiveScore>negativeScore){

    output.innerHTML="😊 Positive Sentiment";

    output.style.color="green";

}

else if(negativeScore>positiveScore){

    output.innerHTML="😔 Negative Sentiment";

    output.style.color="red";

}

else{

    output.innerHTML="😐 Neutral Sentiment";

    output.style.color="orange";

}

}