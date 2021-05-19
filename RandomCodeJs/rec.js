function sum(arr, n){
    if(n<=0){
        return n;
    }
    else{
     return sum(arr, n-1)+arr[n-1];
    }
}

var array1 = [1, 2, 3, 4, 5, 6];

console.log(array1, 3);
