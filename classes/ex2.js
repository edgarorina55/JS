// rectangle class (methods + calculations)
    // add area and perimeter methods


class Rectangle {
    constructor(width, length)
    {
        this.width = width;
        this.length = length;
    }
    area() {
        return this.width * this.length;
    }
    perimeter() {
        return 2 * (this.width + this.length);
    }
}

const r = new Rectangle(23, 49);

console.log(r.area());
console.log(r.perimeter());
