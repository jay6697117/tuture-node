// ** 理解node模块机制 **

// 1.0在通过路径导入模块时，通常省略文件名中的 .js 后缀
const express = require('express');
// console.log(`express:`, express);
const { add } = require('./myModule');
// console.log(`add:`, add);
// console.log(`add(1,2):`, add(1, 2));
console.log('module index:\n', module);
// console.log(`module.paths:\n`, module.paths);

// 2.0 如果你仔细观察，会发现 Node 文件模块查找路径（module.paths）的方式其实是这样的：先找当前目录下的 node_modules，没有的话再找上一级目录的 node_modules，还没找到的话就一直向上找，直到根目录下的 node_modules

let apple = { price: 1 }; // 想象 apple 就是 module
let price = apple.price; // apple.price === 1 || price === 1    // 想象 price 就是 exports
apple.price = 3; // apple.price === 3       // 改变了 apple.price
// price = 5; // price === 5
console.log('apple:', apple);
console.log('price:', price);
