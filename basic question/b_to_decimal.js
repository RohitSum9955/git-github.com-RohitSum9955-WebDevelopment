function decimalToBinary(dec){
    let power=1;
    let bin=0;
    while(dec!=0){
        let rem=dec%2;
        bin=bin+rem*power;
        power=power*10;
        dec=Math.floor(dec/2);
    }
    return bin;

}
let binaryNumber=decimalToBinary(13);
console.log(binaryNumber);