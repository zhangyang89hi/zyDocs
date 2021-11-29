function greeter(name) {
    return "Hey, " + name;
}
var person = 'Jane';
console.log(greeter(person));
var something;
something = 'seven';
something = 7;
// something.setName('Tom');
console.log(something);
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
function getLength(something) {
    return something.toString();
}
var tom = {
    id: '101',
    name: 'tom',
    age: 2
};
console.log(tom.id);
// tom.id = '233'
function sum(x, y) {
    var args = arguments;
    return x + y;
}
sum(1, 2);
var sums = function (x, y) {
    return x + y;
};
var mySearch = function (source, subString) {
    return source.indexOf(subString) > -1;
};
console.log('mySearch', mySearch('mySearch', 'Search'));
function sub() {
    var args = arguments;
}
var arr = [1, 2, 'x', {}];
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    else {
        return firstName;
    }
}
buildName(undefined, '2');
function push(a) {
    var param = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        param[_i - 1] = arguments[_i];
    }
    param.forEach(function (item) {
        a.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
console.log(a);
var b = Boolean(1);
var bb = true;
var ss = '11';
var animal = {
    name: 'tom'
};
var toms = animal;
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    console.log(ele);
    console.log(event);
}
// handleEvent(document.documentElement, 'click')
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"], Days["Mon"], Days["Tue"], Days["Wed"], Days["Thu"], Days["Fri"], Days["Sat"]);
var lily;
lily = ['lily', 3];
lily.push('x');
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.say = function () {
        console.log("my name is " + this.name);
    };
    return Animals;
}());
var xj = new Animals('jack');
xj.say();

