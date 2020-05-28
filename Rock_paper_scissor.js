const getUserChoice = userInput => {
 userInput = userInput.toLowerCase();
 if (userInput==='rock'){
   return userInput;

 }
 else if(userInput==='paper'){
   return userInput;
 }
 else if(userInput==='scissor'){
   return userInput;
 }
 else{
   console.log("Error");
 }
};

const getComputerChoice = ()=>{
  ran = Math.floor(Math.random()*2);
  switch(ran){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissor';
    break;
  }
};

function determineWinner(userChoice, computerChoice){
  if(userChoice===computerChoice){
  return 'The game was tied.';

  }
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'Computer Won';
    }
    else{
      return'User Won!';
    }

  }

if(userChoice==='paper'){
  if(computerChoice==='scissors'){
    return 'Computer Won';
  }
  else{
    return 'User Won!';
  }
};
if(userChoice==='scissors'){
  if(computerChoice==='rock'){
    return 'Computer Won!';
  }
  else{
    return 'User Won!';
  }
}}
const playGame = ()=>{
  userChoice = getUserChoice('rock');
  console.log(userChoice);
  computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
