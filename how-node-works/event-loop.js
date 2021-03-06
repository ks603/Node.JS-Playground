const fs = require('fs')
const crypto = require('crypto')

const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 6

console.log('hello form top 1')

setTimeout(() => console.log('timer 1 finished'), 0)
setImmediate(() => console.log('immediate 1 finished'))

fs.readFile('test-file.txt', () => {
  console.log('i/o finished')
  console.log('-------------------------------')
  setTimeout(() => console.log('timer 2 finished'), 0)
  setTimeout(() => console.log('timer 3 finished'), 3000)
  setImmediate(() => console.log('immediate 2 finished'))

  process.nextTick(() => console.log('Process.nextTick'))

  crypto.pbkdf2('passsword', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('passsword', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('passsword', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('passsword', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('passsword', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('passsword', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('passsword', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted')
  })
  crypto.pbkdf2('passsword', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted')
  })
})

console.log('hello form the top level code')
