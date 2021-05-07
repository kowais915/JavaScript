let raceNumber = Math.floor(Math.random()*1000);
let earlyRegistrant = true;
runnerAge = 19;
if (runnerAge > 18 && earlyRegistrant){
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegistrant){
  console.log(`You guys will race at 9:30 am and your race number is ${raceNumber}`);
}
else if (runnerAge > 18 && !earlyRegistrant ){
  console.log(`You guys will race at 11:00 am and your race number is ${raceNumber}`);
} 
else if (runnerAge<18){
  console.log(`you will race at 1230`)
}
