/*
 * Complete the Rectangle function
 * As JS Function are first class citizen there local variable can
 * behave like property
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.area = a*b;
    this.perimeter = 2*(a+b);
}
