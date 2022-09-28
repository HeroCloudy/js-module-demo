(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./modules/module1":2,"./modules/module2":3,"./modules/module3":4,"./modules/module4":5}],2:[function(require,module,exports){
const msg = 'this is module1'

console.log(msg)

module.exports = {
  testFun: () => {
    console.log('in module1 test function.')
  }
}

},{}],3:[function(require,module,exports){
const msg = 'this is module2'

console.log(msg)

const testFun = () => {
  console.log('in module2 test function.')
}

module.exports = testFun

},{}],4:[function(require,module,exports){
const msg = 'this is module3'

console.log(msg)

exports.testFun = () => {
  console.log('in module3 test function.')
}

},{}],5:[function(require,module,exports){
const msg = 'this is module4'

console.log(msg)

exports.demo = {
  testFun: () => {
    console.log('in module4 test function.')
  }
}

},{}]},{},[1]);
