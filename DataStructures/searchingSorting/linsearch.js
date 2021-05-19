// implementing linear search

/* 
1. We will design a function that takes an array and a vlue that we are looking for in the array
2. The first step is to loop through the passed array
3. At each ietration, you should check if the value at the current index equals the passed "value".
4. If the value equals, return the index.
5. After all the ietrations, when no value has been matched to the passed val, you return -1.



*/

let linearSearch = (arr, val)=>{
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==val){
            return console.log(`The value is at ${i}`);
        }
    }
    return console.log("Not found");
}

//testing
let arr = [2, 3, 5, 6, 7, 8, 44, 66];
linearSearch(arr, 6);
// it returned the index at which 6 has been found.
linearSearch(arr, 34);
