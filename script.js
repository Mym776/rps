let userscore=0;
let cpscore=0 
function game(){
    
    let interval;
    clearInterval(interval)
    interval = setInterval(changeBg, 40)
    
    const body =  document.getElementById("body");
    let value = window.getComputedStyle(body);
    let pos = value.getPropertyValue("background");
    let x1 = pos[56] , x2 = pos[57];
    pos = Number(x1*10) + Number(x2)
    console.log(pos)
    let choice = userchoice()
    let c = generate() 
    let y = translate(c);
    choice = translate(choice);
    let status = compare(choice,y);
    
function changeBg(){
     if(status === 1){
         if(pos== 23){
             clearInterval(interval);
         }else{
             pos--;
             body.style.background = 
         "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) "+pos+"%, rgba(0,212,255,1) 100%)";
         }
       
     }else if(status === 0){
         if(pos== 73){
             clearInterval(interval);
         }else{
             pos++;
             body.style.background = 
         "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) "+pos+"%, rgba(0,212,255,1) 100%)";
         }
      
     }else {
         if(pos== 53){
             clearInterval(interval);
         }else{
            pos>53?pos--:pos++
             body.style.background = 
         "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) "+pos+"%, rgba(0,212,255,1) 100%)";
         }
       
     }
 }
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
    let status;
    if(x==="paper" && y==="rock"){
        userscore++;
        z1 = "You picked (Score="+userscore+"): " + x ;
        z2 = "\nComputer picked (Score="+cpscore+"): " + y;
        z3= "\nYou win";
        status =1;
       
    }else if(x==="rock" && y==="scissor"){
        userscore++;
        z1 = "You picked (Score="+userscore+"): " + x ;
        z2 = "\nComputer picked (Score="+cpscore+"): " + y;
        z3= "\nYou win";
        status =1;
       
    }else if(x==="scissor" && y==="paper"){
    
        userscore++;
        z1 = "You picked (Score="+userscore+"): " + x ;
        z2 = "\nComputer picked (Score="+cpscore+"): " + y;
        z3= "\nYou win";
        status =1;
       
    }else if(x===y){
       
        z1 = "You picked (Score="+userscore+"): " + x ;
        z2 = "\nComputer picked (Score="+cpscore+"): " + y;
        z3= "\nDraw";
        status =-1;
    }else if(x==="invalid"){
        
        z1 = "Invalid Choice, pick a number from 1-3";
        z2 = "";
        z3 = "";
    }else{
        cpscore++;
        z1 = "You picked (Score="+userscore+"): " + x ;
        z2 = "\nComputer picked (Score="+cpscore+"): " + y;
        z3= "\nComputer wins";
        status =0;
        
    }
    document.getElementById("result").innerHTML = z1;
    document.getElementById("result2").innerHTML = z2;
    document.getElementById("result3").innerHTML = z3;
    return status;
}