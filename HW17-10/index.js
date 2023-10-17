"use strict";

console.clear();


while(true){
    let input=prompt('Enter the String');
    let reverseArr=input.split('').reverse();
    for(let i=0; i<reverseArr.length;i++){
        let element=reverseArr[i];
        if(element===element.toLowerCase()){
            reverseArr[i]=reverseArr[i].toUpperCase();
        }
        else reverseArr[i]=reverseArr[i].toLowerCase();
    }
    let reverseStr=reverseArr.join('');
    console.log(reverseStr);
}