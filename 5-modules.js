//commonJS every file is module (by default)
//Modules - encapsulated code (only share minimum)
// modules

const names = require('./2-names')
const sayHi = require('./3-utils')
console.log(names);
require('./4-mind-granade')
sayHi(names.peter)
sayHi(names.john)
sayHi('Susan')