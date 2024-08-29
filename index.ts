// BT1
let myName: string = 'Dinh Duong';
let age: number = 18;
let isStudent: boolean = true;

// BT2
const hello = (myName?: string): string => {
    if(myName) {
        return `Hello ${myName}`;
    } else {
        return 'Hello, World !';
    }
}

// BT3
interface Person {
    name: string;
    age: number;
}

const printPerson = (person: Person): void => {
    console.log(
        `Name: ${person.name}, 
        Age: ${person.age}`
    )
}

// BT4
enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Green

// BT5
function print<T> (data: T)  : T{
    return data;
}

// BT6
let arr: number[] = [1, 2, 3, 4, 5];

const myMap = arr.map((item)=> item*10);

const evenNumber = arr.filter((item)=> item % 2 === 0);

const sumArr = arr.reduce((sum, item)=> sum + item, 0);

// BT7
let arr2: (string | number)[] = ['Dinh', 20, 'Nam'];

interface Iperson {
    name: string;
    age: number;
}
interface Istudent {
    studentId: number;
    className: string;
}

type hocSinh =  Iperson & Istudent;
let x : hocSinh = {
    name: 'Duong Dinh',
    age: 18,
    studentId: 56,
    className: '23SE3'
}

// BT8
class Animal {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }
    
    public speak(): string {
        return 'meo meo meo';
    }
}

class Dog extends Animal {
    public constructor(name: string) {
        super(name);
    }

    public speak(): string {
        return 'Woof';
    }
}

// BT9 
const divice = function(a: number, b:number) {
    let ans: number = 0;
    try {
        ans = a / b;
    } catch(e) {
        console.error(e);
        console.error('So chia phai khac 0');
    }
    return ans;
}

// BT10
interface Shape {
    area(): string;
}

class Circle implements Shape {
    area():string {
        return 'Circle';
    }
}
class Rectangle implements Shape {
    area():string {
        return 'Reactangle';
    }
}