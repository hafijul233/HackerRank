function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = parseFloat(readLine());
    // Print the area of the circle:
    const area = Math.PI * r * r;
    console.log(area);
    // Print the perimeter of the circle:
    const perimeter = 2 * Math.PI * r;
    console.log(perimeter);
}