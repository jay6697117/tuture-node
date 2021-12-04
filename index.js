/*
const alert = require('alert');
alert('您代码有校验错误');
// debugger;
*/
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

// 监听 connect 事件，注册回调函数
emitter.on('connect', param => {
  console.log('我的名字是:', param);
});

// 触发 connect 事件，并且加上一个参数（即上面的 param
emitter.emit('connect', '张金辉');
