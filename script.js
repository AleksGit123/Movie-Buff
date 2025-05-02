"use strict"

// let header2 = document.querySelector(".header2");
let h2 = document.querySelector("h2");
let pg2Header = document.querySelector(".pg2_header");
let userInput = document.querySelector(".user_input");
let sendButton = document.querySelector(".send");
let answer = document.querySelector(".answer")

// movie list
let GrownUps ="I can suggest u Grown Ups. it's a Great comedy about classmates, who left little childish mood and spend their Weekends doing crazy things and having fun.";//comedy
let NoteBook = "I think if u like this genre, u should start watching from this. This story is about fantastic couple,with fantastic loyal and true love, but every story has sad part. And the movie name is.......NoteBook by Nick Cassavetes";//romantic
let Equalizer = "This is one of the best action movie for me, by which u can feel pleasure and satisfaction.'Equalizer',a man who makes enemies everywhere, trying to be last dead";//action
let CandoLake = "This movie will blow your mind. If u like deep dive into details, this is for u.So dive deep into 'Cando Lake' mysteries!"//mindblowing
let Hostiles = "It should be your one of the best choise.Cristian bale's another western masterpiece about battle between Indians and Amaricans.One of the leader of the Apaches' tribe isaccompanied by american sherifs,but the way is not as simple as it looks.Oh, i almost forgot movie name, it is Hostiles.Enjoy the movie!"//Western


let genres = {
    comedy:["funny","for fun","to make me laugh","burst into laugh","feel good"],

    romantic:["love","romantic","couples","cry","drama","melodrama","passion"],
    
    actions:["action","Thrilling","shooter","always something going on","fighting","adventure"],
    
    mindblowing:["mind blowing","to blow my mind","complicated","amazing","extraordinary","shocking"],
    
    western:["western","action","shooter","killers","breathtaking",]

}

// genres and movies matvhing
let genresKey = Object.keys(genres);
let genresValue = Object.values(genres);
// console.log(genresKey,genresValue);
// for(let i = 0;i < genresValue.length;i++){
//     // console.log(genresValue[i])
//     // for(let j in genresValue[i]){
      
//             console.log(genresValue[0][i]);
        
//     // }
// };

 function getMovie(){
    
    for(let i = 0;i < genresValue.length;i++){
        // console.log(genresValue[i])
        switch(true){
        case userInput.value.includes(genresValue[0][i]) : answer.innerText = GrownUps;
        break;
        case userInput.value.includes(genresValue[1][i]) : answer.innerText = NoteBook;
        break;   
        case userInput.value.includes(genresValue[2][i]) : answer.innerText = Equalizer;
        break;
        case userInput.value.includes(genresValue[3][i]) : answer.innerText = CandoLake;
        break;
        case userInput.value.includes(genresValue[4][i]) : answer.innerText = Hostiles;
        }
        
        
    }
}

 // qasual questions and answers

let QandA = {
    "What is your name?":"My name is Movie Buffer",

    "What is Buff?":"Buff reffers to person who is crazy about movies",

    "Who is your creator?" :"I can't tell u name, but he is a beginner Developer😁",

    "Thanks for movies" : "Your Welcome, buddy! Come around another time"

}

// object keys and values

let qasualKeys = Object.keys(QandA);
let qasualValues = Object.values(QandA);



function qasualChat(){
    for(let i = 0;i < qasualKeys.length;i++){
        if(userInput.value === qasualKeys[i]){
            console.log(qasualValues[i]);
            answer.innerText = qasualValues[i];
            // console.log(userInput.value)
        }
        else if(userInput.value !== qasualChat[i]){
            answer.value = "I dont get the question";
        }

    }
    

}

        
// events on clicking on the send button or enter
function sendEvent(eventName1,eventName2){
    sendButton.addEventListener("click",() =>{
        h2.setAttribute("class","hide");
        pg2Header.setAttribute("class","hide");
        // pg2Header.style.overflow = "visible;"
        // pg2Header.style.animation = "none";
        qasualChat();
        getMovie();
        
     })
//  console.log(response)
    document.addEventListener(eventName2, event =>{
        h2.setAttribute("class","hide");
        pg2Header.setAttribute("class","hide");

        if(event.keyCode == 13){
        

           qasualChat();
           getMovie();
        }
    })
}

sendEvent("click","keydown");


