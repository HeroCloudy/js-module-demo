console.log('in module2')

const str2 = 'hello module2'

const fun2 = (msg) => {
  return `module2：${msg}`
}

export default {
  str2,
  fun2
}
