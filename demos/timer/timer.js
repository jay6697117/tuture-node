const commander = require('commander'); // node_modules包 包名
const ora = require('ora'); // node_modules包 包名
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
setTimeout(() => {
  spinner.stop();
  console.log(commander.message);
  console.log('\n');
}, commander.time * 1000);

// debugger;
