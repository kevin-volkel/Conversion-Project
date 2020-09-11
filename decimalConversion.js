let decimal = Number(prompt("Type any whole number."));


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


console.log(`The number in hexadecimal is ${hexRemainder2}${hexRemainder1}`)

let binary1 = binaryRemainder1 + binaryRemainder2 + binaryRemainder3 + binaryRemainder4
