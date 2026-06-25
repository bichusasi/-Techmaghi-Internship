function checkSpam(){

let message=document.getElementById("message").value;

if(message==""){

alert("Please enter a message.");

return;

}

fetch("/detect",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message:message
})

})

.then(response=>response.json())

.then(data=>{

document.getElementById("result").innerHTML=data.result;

document.getElementById("score").innerHTML=
"Spam Score : "+data.score;

if(data.words.length>0){

document.getElementById("words").innerHTML=
"Detected Spam Words : "+data.words.join(", ");

}
else{

document.getElementById("words").innerHTML=
"No Spam Keywords Found";

}

});

}