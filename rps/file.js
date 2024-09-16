let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore")
const compscorepara=document.querySelector("#compscore")
const gencomp=()=>{
    const options=["rock","paper","scissors"];
    const radindx=Math.floor(Math.random()*3);
    return options[radindx]
   
}

const drawgame =()=>{
    
    msg.innerText="its a draw play again"
    msg.style.backgroundColor="#081b31"
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
       
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"

    }else{
        compscore++;
        compscorepara.innerText=compscore;
        
       
        msg.innerText=`you lose ${userchoice} beats your ${compchoice}`
        msg.style.backgroundColor="red";
    }

}
const playgame = (userchoice) =>{
   
    const compchoice=gencomp()
   
    if(userchoice===compchoice){
        drawgame();
    } else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;

        }else if(userchoice==="paper"){
           userwin= compchoice==="scissors"?false:true;

        }else{
           userwin= compchoice==="rock"?false:true;

        }
        showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       
        playgame(userchoice);
    })
})


