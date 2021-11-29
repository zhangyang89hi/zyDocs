
function greeter(name: string) {
    return "Hey, " + name
}
let person = 'Jane'

console.log(greeter(person))

let something;
something = 'seven';
something = 7;

// something.setName('Tom');
console.log(something);

let myFavoriteNumber:string|number = 'seven';
myFavoriteNumber = 7;

function getLength(something:string|number): string {
    return something.toString()
}

interface Person {
    readonly id: string;
    name: string;
    age?: number;
    [p: string]: string|number;
}
let tom:Person = {
    id: '101',
    name: 'tom',
    age: 2
}
console.log(tom.id)
// tom.id = '233'

function sum(x: number, y: number): number {
    let args: IArguments = arguments
    return x + y
}
sum(1,2)

let sums: (x:number, y:number) => number  = function(x:number, y:number):number {
    return x + y
}   
interface SearchFunc{
    (source:string, subString:string) : boolean
}
let mySearch: SearchFunc = function(source:string, subString:string):boolean {
    return source.indexOf(subString) > -1
}
console.log('mySearch', mySearch('mySearch', 'Search'))

function sub() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments
}

var arr: any[] = [1,2,'x', {}]

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + lastName
    } else {
        return firstName
    }
}
buildName(undefined, '2')

function push(a: any[], ...param: any[]) {
    param.forEach(function(item) {
        a.push(item)
    })
}
var a = []
push(a, 1,2,3)
console.log(a)

let b:boolean= Boolean(1);
let bb:Boolean= true;

let ss: String = '11';

// (window as any).x = '';

interface Animal {
    name: string;
}

interface Cat {
    name: string;
    run(): void;
}

const animal = {
    name: 'tom'
}

let toms = animal as Cat

declare var $:(selector: string) => any;
// $('#div');

type name = string
type nameResolve = () => string

function getName(n:name|nameResolve):string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

type EventName = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventName) {
    console.log(ele)
    console.log(event)
}
// handleEvent(document.documentElement, 'click')
enum Days{Sun=7, Mon=1, Tue, Wed, Thu, Fri, Sat}

console.log(Days["Sun"], Days["Mon"],Days["Tue"],Days["Wed"],Days["Thu"],Days["Fri"],Days["Sat"])


let lily:[string, number]
lily = ['lily', 3]
lily.push('x')

class Animals {
    public name:string;
    constructor(name:string) {
        this.name = name
    }
    static isAnimal(a) {
        return a instanceof Animals
    }
    say() {
        console.log(`my name is ${this.name}`)
    }
}
let xj = new Animals('jack')
xj.say()

Animals.isAnimal(xj)
