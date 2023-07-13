//there is no size of array

//declare an array
let arr=[];
//2d array
let b = [[1,2,3],[3,4,5],[4,5,6]]
//print
console.log(b);

//traverse
let a = [1,2,3,4,5,6,7,8,9];
//for(let i=0; i<a.length; i++){
//    console.log(i + "  : " + a[i]);
//}

//methods->
//last element ->add/remove
//console.log("before",a);
//a.pop();//remove last
//a.push(10);//add last
//console.log("..........................");
//console.log("after",a);
//
////first element ->add/remove
//a.shift(); //remove first
//a.unshift(20);//add first
//console.log("after",a);

//copied a subarray -> starting index, ending index
let sliceArray = a.slice(1,4);
console.log("sliceArray", sliceArray);
console.log("array",a);