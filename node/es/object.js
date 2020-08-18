

var obj = new Proxy({}, {
    get: function(target, property) {
        return 36
    }
})
// console.log(obj.name)
// console.log(obj.time)
// console.log(obj.area)

var Person = function(info){
    return new Person.fn.init(info);
}
Person.fn = Person.prototype = {
    constructor: Person,
    init:function(info){
        this.name = info.name;
        this.sayHello = function(){
            this.makeArray();
            console.log('sayHello')
        }
    },
    makeArray:function(){
        console.log(this.name);
    },
    setAge: function(info) {
        this.age = info.age
    }
}
Person.fn.init.prototype = Person.fn;

var zy = new Person({name:'zhangyang'})

console.log(zy.init)

console.log(zy)
zy.sayHello()
zy.makeArray()
console.log('zy name:', zy.name)
console.log('zy age:', zy.age)
zy.setAge({age: '25'})
console.log('zy age:', zy.age)

