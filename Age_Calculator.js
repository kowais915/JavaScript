function howOld(age, year){
  let currentYear = 2020;
  let difference = currentYear - year;
  let calcAge = age - difference;
  if (year > currentYear){
    return `You will be ${calcAge} in the year ${year}`
  }
  else if(year<currentYear){
    return `The year ${year} was ${calcAge} years before you were born`
  }
}
