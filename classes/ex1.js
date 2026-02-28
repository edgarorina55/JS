// Person class (constructor + method)
    // create a class with name, age, and a method instance 

class Person {
    constructor(name, age) 
    {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

const p1 = new Person('Edgar', 31);
const p2 = new Person('Mbuga', 47);

console.log(p1.introduce());
console.log(p2.introduce());
