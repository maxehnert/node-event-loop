/**
 *
 The main advantage to using setImmediate() over setTimeout()
 is setImmediate() will always be executed before any timers if scheduled within an I/O cycle,
 independently of how many timers are present.
 *
 *
 *
 timers
 I/O
 Idle
 Poll
 Check
 **/
var fs = require('fs')

fs.readFile(__filename, () => {

  setTimeout(() => {
    console.log('timeout')
  }, 0)

  setImmediate(() => {
    console.log('immediate')
  })
})
