
let tipCalculator = (quality, total)=>{
  switch(quality){
    case "bad":
    return 5/100*total;
    break;
    case "ok":
    return 15/100*total;
    break;
    case "good":
    return 20/100*total;
    break;
    case 'excellent':
    return 30/100*total;
    break;
    default:
    return 18/100*total;
    break;
  }
}






