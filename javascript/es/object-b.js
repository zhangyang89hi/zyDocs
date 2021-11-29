function People (name) {
    var num = 1
    this.type= name || ''
    function print() {
        console.log('print: ', num)
    } 
    this.printType = function() {
        console.log('printType:', this.type)
    }
}
People.prototype = {
    ptype: 'prototype',
    printPtype: function() {
        console.log('printPtype:', this.ptype)
    }
}

var zhang = new People('zhang')
var li = new People('li')

console.log(zhang.type)
console.log(li.type)

zhang.printType()
li.printType()

// zhang.printPtype()
zhang.ptype = 'zy prototype'
// li.printPtype()
console.log(zhang.ptype)
console.log(li.ptype)
