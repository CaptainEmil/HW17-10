"use strict";

console.clear();

const obj = {
    name: 'Alex',
    surName: 'Max',
    AGE: 40
}

while(true){
    let field = prompt('Enter the field').toLowerCase();
    let isIncluded=false;
    for(let key in obj) {
        if(key.toLowerCase()===field)isIncluded=true;
    }
    console.log(isIncluded);
}
