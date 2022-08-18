const WasRun = require('./WasRun/WasRun')

const test = new WasRun('testMethod')
console.log(test.wasRun)
test.run()
console.log(test.wasRun)