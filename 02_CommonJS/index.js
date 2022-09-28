console.log('---- 加载模块 ----')

const demo1 = require('./modules/module1')
const demo2 = require('./modules/module2')
const demo3 = require('./modules/module3')
const demo4 = require('./modules/module4')

console.log('---- 使用模块 ----')
demo1.testFun()
demo2()
demo3.testFun()
demo4.demo.testFun()
