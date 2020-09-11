let decimal = prompt("Type any whole number.");
let binaryDecimal = decimal;


let hexa1 = Math.floor(decimal/16);
let hexRemainder1 = decimal%16;
let hexRemainder2 = Math.floor(hexa1%16); 
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
if(binaryDecimal >= 128)
{
    binaryDecimal -= 128;
    binaryRemainder1=1;    
}
if(binaryDecimal >= 64)
{
    binaryDecimal -= 64;
    binaryRemainder2 = 1;
}
if(binaryDecimal >= 32)
{
    binaryDecimal -= 32;
    binaryRemainder3 = 1;
}
if(binaryDecimal >= 16)
{
    binaryDecimal -= 16;
    binaryRemainder4 = 1;
}
if(binaryDecimal >= 8)
{
    binaryDecimal -= 8;
    binaryRemainder5 = 1;
}
if(binaryDecimal >= 4)
{
    binaryDecimal -= 4;
    binaryRemainder6 = 1;
}
if(binaryDecimal >= 2)
{
    binaryDecimal -= 2;
    binaryRemainder7 = 1
}
if(binaryDecimal >= 1)
{
    binaryDecimal -= 1;
    binaryRemainder8 = 1;
}

console.log(`The binary of ${decimal} is ${binaryRemainder1}${binaryRemainder2}${binaryRemainder3}${binaryRemainder4} ${binaryRemainder5}${binaryRemainder6}${binaryRemainder7}${binaryRemainder8}`);

console.log(`The hexa-decimal of ${decimal} is ${hexRemainder2}${hexRemainder1}`)
