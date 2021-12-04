const commander = require('commander'); // node_modules包 包名
const ora = require('ora'); // node_modules包 包名
const alert = require('alert');
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();
const printProgramInfo = require('./info'); // 本地包 相对路径
const { getCurrentTime } = require('./datetime'); // 本地包 相对路径

// 解析参数
commander
  .option('-t, --time <number>', '等待时间 (秒)', 3)
  .option('-m, --message <string>', '要输出的信息', 'Hello World')
  .parse(process.argv);

// 输出
console.log('\n');
console.log('------------------------1----------------------');
console.log('commander.message:', commander.message);
console.log('commander.time:', commander.time);
console.log('------------------------2----------------------');
printProgramInfo();
console.log('------------------------3----------------------');
getCurrentTime();
console.log('------------------------4----------------------');
const spinner = ora('正在加载中，请稍后 ...').start();

// 监听 connect 事件，注册回调函数
emitter.on('connect', param => {
  console.log(`我的名字是: ${param}`);
  alert(`我的名字是: ${param}`);
  console.log('------------------------5----------------------');
});

setTimeout(() => {
  spinner.stop();
  console.log(commander.message);
  // 触发 connect 事件，并且加上一个参数（即上面的 param
  emitter.emit('connect', '张金辉');
}, commander.time * 1000);

// process全局对象监听 exit 事件，注册回调函数
process.on('exit', () => {
  console.log('下次再见啦');
  alert('下次再见啦');
  console.log('\n');
});
