define(function (require, exports, module) {

  console.log('in module1.')

  function sum(num1, num2) {
    console.log('module1 sum function.', num1, num2)
    return num1 + num2
  }

  exports.sum = sum
})
