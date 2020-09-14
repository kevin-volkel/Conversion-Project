let decimal = prompt("Type any whole number less than 255.");

//checks to see if number is within range
if (decimal > 255){
    alert(`Sorry but ${decimal} is over the 255 integer limit.`)
}else{



let binaryDecimal = decimal;

//converts to hexa-decimal
let hexa1 = Math.floor(decimal/16);
let hexRemainder1 = decimal%16;
let hexRemainder2 = Math.floor(hexa1%16); 
//decides if letters are needed
if(hexRemainder1 == 10){
    hexRemainder1 = "A";
}
if(hexRemainder1 == 11){
    hexRemainder1 = "B";
}
if(hexRemainder1 == 12){
    hexRemainder1 = "C";
}
if(hexRemainder1 == 13){
    hexRemainder1 = "D";
}
if(hexRemainder1 == 14){
    hexRemainder1 = "E";
}
if(hexRemainder1 == 15){
    hexRemainder1 = "F";
}
if(hexRemainder2 == 10){
    hexRemainder2 = "A";
}
if(hexRemainder2 == 11){
    hexRemainder2 = "B";
}
if(hexRemainder2 == 12){
    hexRemainder2 = "C";
}
if(hexRemainder2 == 13){
    hexRemainder2 = "D";
}
if(hexRemainder2 == 14){
    hexRemainder2 = "E";
}
if(hexRemainder2 == 15){
    hexRemainder2 = "F";
}

let binaryRemainder1 = 0;
let binaryRemainder2 = 0;
let binaryRemainder3 = 0;
let binaryRemainder4 = 0;
let binaryRemainder5 = 0;
let binaryRemainder6 = 0;
let binaryRemainder7 = 0;
let binaryRemainder8 = 0;

//binary conversion: gets remainder, divides to get new number, floor it, repeat
binaryRemainder8 = binaryDecimal%2;
binaryDecimal/=2;
binaryDecimal = Math.floor(binaryDecimal);
binaryRemainder7 = binaryDecimal%2;
binaryDecimal/=2;
binaryDecimal = Math.floor(binaryDecimal);
binaryRemainder6 = binaryDecimal%2;
binaryDecimal/=2;
binaryDecimal = Math.floor(binaryDecimal);
binaryRemainder5 = binaryDecimal%2;
binaryDecimal/=2;
binaryDecimal = Math.floor(binaryDecimal);
binaryRemainder4 = binaryDecimal%2;
binaryDecimal/=2;
binaryDecimal = Math.floor(binaryDecimal);
binaryRemainder3 = binaryDecimal%2;
binaryDecimal/=2;
binaryDecimal = Math.floor(binaryDecimal);
binaryRemainder2 = binaryDecimal%2;
binaryDecimal/=2;
binaryDecimal = Math.floor(binaryDecimal);
binaryRemainder1 = binaryDecimal%2;

//output
console.log(`The binary of ${decimal} is ${binaryRemainder1}${binaryRemainder2}${binaryRemainder3}${binaryRemainder4} ${binaryRemainder5}${binaryRemainder6}${binaryRemainder7}${binaryRemainder8}`);

console.log(`The hexa-decimal of ${decimal} is ${hexRemainder2}${hexRemainder1}`)
}
