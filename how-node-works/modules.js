const Calculator = require('./test-module-1')

console.log(arguments)
console.log(require('module').wrapper)

const C = require('./test-module-1')
const calc1 = new C()
console.log(calc1.add(2, 5))

// caching
require('./test-module-3')()
require('./test-module-3')()
require('./test-module-3')()
