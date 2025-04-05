
function game(){
    
    let choice = userchoice()
    let c = generate() 
    let y = translate(c);
    choice = translate(choice);
    compare(choice,y);
}
function userchoice(){
    
    let choice = Number(prompt("Enter Your choice"))
    return choice;
 }
function generate(){
    let y = Math.random() *100
    console.log(y)
    let x = (Math.floor(y%3))+1;
  
    return x;
}
function translate(num){
    let y;
    if(num===1){
        y = "rock";
    }else if(num === 2){
        y = "paper";
    }else if(num === 3){
        y = "scissor";
    }else{
        y = "invalid";
    }
    return y;
}

function compare(x,y){
    let z1,z2,z3;
    if(x==="paper" && y==="rock"){
        z1 = "You picked: " + x ;
        z2 = "\nComputer picked: " + y;
        z3= "\nYou win";
    }else if(y==="rock" && y==="scissor"){
       
        z1 = "You picked: " + x ;
        z2 = "\nComputer picked: " + y;
        z3= "\nYou win";
    }else if(y==="scissor" && y==="paper"){
    
        z1 = "You picked: " + x ;
        z2 = "\nComputer picked: " + y;
        z3= "\nYou win";
    }else if(x===y){
       
        z1 = "You picked: " + x ;
        z2 = "\nComputer picked: " + y;
        z3= "\nDraw";
    }else if(x==="invalid"){
        
        z1 = "Invalid Choice, pick a number from 1-3";
        z2 = "";
        z3 = "";
    }else{
        z1 = "You picked: " + x ;
        z2 = "\nComputer picked: " + y;
        z3= "\nComputer wins";
    }
    document.getElementById("result").innerHTML = z1;
    document.getElementById("result2").innerHTML = z2;
    document.getElementById("result3").innerHTML = z3;

}
