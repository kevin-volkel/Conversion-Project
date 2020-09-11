let decimal = Number(prompt("Type any whole number."));

let hexa1 = Math.floor(decimal/16);
let remainder1 = decimal%16;
let remainder2 = Math.floor(hexa1%16); 
if(remainder1 == 10){
    remainder1 = "A";
}
if(remainder1 == 11){
    remainder1 = "B";
}
if(remainder1 == 12){
    remainder1 = "C";
}
if(remainder1 == 13){
    remainder1 = "D";
}
if(remainder1 == 14){
    remainder1 = "E";
}
if(remainder1 == 15){
    remainder1 = "F";
}
if(remainder2 == 10){
    remainder2 = "A";
}
if(remainder2 == 11){
    remainder2 = "B";
}
if(remainder2 == 12){
    remainder2 = "C";
}
if(remainder2 == 13){
    remainder2 = "D";
}
if(remainder2 == 14){
    remainder2 = "E";
}
if(remainder2 == 15){
    remainder2 = "F";
}

let binaryRemainder1;
let binaryRemainder2;
let binaryRemainder3;
let binaryRemainder4;
let binaryRemainder5;
let binaryRemainder6;
let binaryRemainder7;
let binaryRemainder7;
if(decimal >= 128)
{
    decimal -= 128;
    binaryRemainder1=1;    
}
if(decimal >= 64)
{
    decimal -= 64;
    binaryRemainder2 = 1;
}
if(decimal >= 32)
{
    decimal -= 32;
    binaryRemainder3 = 1;
}
if(decimal >= 16)
{
    decimal -= 16;
    binaryRemainder4 = 1;
}
if(decimal >= 8)
{
    decimal -= 8;
    binaryRemainder5 = 1;
}
if(decimal >= 4)
{
    decimal -= 4;
    binaryRemainder6 = 1;
}
if(decimal >= 2)
{
    decimal -= 2;
    binaryRemainder7 = 1
}
if(decimal >= 1)
{
    decimal -= 1;
    binary1 = 1;
}
console.log(`The number in binary is ${binary128}${binary64}${binary32}${binary16} ${binary8}${binary4}${binary2}${binary1}`);

console.log(`The number in binary is ${binaryRemainder1}${binaryRemainder2}${binaryRemainder3}${binaryRemainder4}${binaryRemainder5}${binaryRemainder6}${binaryRemainder7}${binaryRemainder8}`);
console.log(`The number in hexadecimal is ${remainder2}${remainder1}`)

