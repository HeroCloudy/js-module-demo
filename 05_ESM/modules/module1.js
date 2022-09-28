console.log('in module1')

export const str1 = 'hello module1'

export const fun1 = (msg) => {
  return `module1：${msg}`
}

const user = {
  name: 'zhangsan',
  age: 30
}

export default user
