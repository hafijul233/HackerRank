/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 * 3. It is ES6 feature
 */
class Polygon {
    constructor(params) {
        this.sides = params;
    }

    perimeter() {
        let sum = 0;

        for (let i = 0; i < this.sides.length; i++) {
            sum += this.sides[i];
        }

        return sum;
    }


}