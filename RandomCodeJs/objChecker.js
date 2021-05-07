
var student = {
    "name":"Owais",
    "major":"computer engineering",
    "roll number": 2019249

};

function objchecker(obj, propName){
    if(obj.hasOwnProperty(propName)){
        return console.log(obj[propName]);
    }
    else{
        return "Not Found";
    }



}

var propname = "name";

//calling the objchecker function
objchecker(student, propname);