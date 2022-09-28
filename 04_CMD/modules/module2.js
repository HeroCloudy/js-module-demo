define(function (require, exports, module) {

  console.log('in module2')

  const str = '优雅哥测试'

  function calculate (n1, n2) {
    const m1 = require('./module1')
    return m1.sum(n1, n2)
  }

  exports.obj = {
    str,
    calculate
  }
})
