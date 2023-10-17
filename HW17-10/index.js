"use strict";

console.clear();


const titles = ['Заголовок 1', 'Очень длинный заголовок во всей книжке', 'Заголовок 2'];
const pages = [10, 20, 123456789012345];
titles.map((x,i)=>console.log(`${x.concat('.').padEnd(20-String(pages[i]).split('').length,'.')}${pages[i]}`));