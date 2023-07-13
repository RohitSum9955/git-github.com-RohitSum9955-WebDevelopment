// print no main nothing
//top to bottom left to right
console.log("Hello world!");

//variable declare way stored-> these are three way like let, var and const

//java-> statically type language
//java tells us both the name of the variable and the typr of the variable
// int a;

//variable declare way
// we just tell that a is variable
let a; //default value undefined
console.log("value of a", a);
//number
a=10;
a=10.1;
console.log("value of a", a);
// String
//no char only string and no diff b/w singale quotes nad double
a='Hello';
a="double quoted hello";
// boolean
a=true;

// null
a=null;

console.log("value of a", a);
console.log(5/2);

// undefined, null number, string, boolean -> Primitive types
// 1.print from 1 to 10
for(let i=1; i<=10; i++){
    console.log(i);
}
// 2. print only even number to 10
for(let i=1; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}