// counter class (class changes)
    // create increment, decrement, reset, and getValue 


class Counter {
    constructor() {
        this.value = 0;
    }

    increment() {
        this.value++;
    }
    decrement() {
        this.value--;
    }
    reset() {
        this.value = 0;
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
