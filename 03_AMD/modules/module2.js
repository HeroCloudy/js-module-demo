define(['m1', 'moment'], function (m1, moment) {

  console.log('in module2.')

  function calculate (n1, n2) {
    console.log('begin calc: ', moment().format('YYYY MMM Do h:mm:ss a'))
    return m1.sum(n1, n2)
  }

  return {
    calculate
  }
})
