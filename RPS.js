let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".Choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const generatecompChoice=()=>{
    //it can randomly be rock, paper, scissors
    const options=["rock","paper","scissors"];
    const randindex=Math.floor(Math.random()*3)//to get the random numbers in the range of 0-3. And these number can later be treated as indexes of array
    return options[randindex];
};
const drawgame=()=>{
    msg.innerText=`Game is draw...`;
    
};
const showWinner=(userWin, userChoice, compChoice)=>{
    
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`Yeah! You win...${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText= `Opps! You lose...${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    };
};
const playGame=(userChoice)=>{
    const compChoice= generatecompChoice();
    if(userChoice===compChoice){
        //the game would be draw then 
        drawgame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
                //scissor,rock
            userWin=compChoice==="scissors" ? false:true;
        }else{
            //paper,rock
            userWin=compChoice==="rock"? false : true;
        };

        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((Choice)=>{
    Choice.addEventListener("click",()=>{
        const userChoice=Choice.getAttribute("id");
        playGame(userChoice);
    });
});
