define(function (require) {

  console.log('in index')

  require.async('./modules/module3', function (m3) {
    console.log('异步加载 module3')
    m3.demo()
  })

  const m2 = require('./modules/module2')
  console.log(m2.obj.str)

  console.log(m2.obj.calculate(10, 20))
  console.log(m2.obj.calculate(100, 200))
  console.log(m2.obj.calculate(1000, 3000))
})
