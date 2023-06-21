//It is non-premitive data type that is used to represent anything
//empty object creation
//let obj={
//
//};
//object is a collection of key : value pair
//key: string or number and values : any valid js datatype

let cap = {
    firstName: "Rohit",
    //lastName: "Prasad",
    "last Name": "Prasad" , //2nd way printing element we will also write in this form so they can handle this type of writting
    friend: ["Pushkar","Rahul","Ravi"],
    address: {
        city: "noida",
        state: "UP",
    },
    age: 34,
    isAvenger: true
}
//print 
//console.log(cap);
//console.log(cap.firstName);
//console.log(cap.age);
//console.log(cap.friend[1]);
//when we get city name under the address
//console.log(cap.address.city);
//get 2nd way to print this 
let varName = "firstName";
console.log(cap[varName]);

varName = "last name";
console.log(cap["last Name"]);

//update(delete) and add the no. or element
delete cap.friend;

//add movie
cap.movie=["soldier","var","one man army"];
let key = "comp"
cap[key]="DCU";
//update
cap.isAvenger=false;
console.log(cap);
