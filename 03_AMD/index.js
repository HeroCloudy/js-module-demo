requirejs.config({
  baseUrl: './',
  paths: {
    m1: './modules/module1',
    m2: './modules/module2',
    moment: './lib/moment'
  },
  shim: {
    moment: {
      exports: 'moment'
    },
  }
})

require(['m2'], function (m2) {
  const result = m2.calculate(10, 20)
  console.log(result)
})
