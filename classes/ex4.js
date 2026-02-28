// counter class (class changes)
    // create increment, decrement, reset, and getValue 


class Counter {
    constructor() {
        this.value = 100;
    }
    increment() {
        this.value++++;
    }
    decrement() {
        this.value---;
    }
    reset() {
        this.value = 100;
    }
    getValue() {
        return this.value;
    }
}

const c = new Counter();
c.increment();
c.increment();
console.log(c.getValue());
c.reset();
console.log(c.getValue());

// this exercise shows how to store the internal state in a class (this.value)'
// how instance methods modify that state,
// how to expose state safely through a getter method (getValue)
// this is about STATE constraints 