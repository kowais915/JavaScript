function countdown(n){
    if(n<1){
      return [];
    }
    else{
     
      const arryDown = countdown(n-1);
    //   arryDown.push(n);
      return arryDown;
  
    }
    
  }
  console.log(countdown(6));

  //[5]

  
