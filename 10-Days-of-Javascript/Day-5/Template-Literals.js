/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 *
 * Example: const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
 */
function sides(literals, ...expressions) {
    var A = expressions[0];

    var P = expressions[1];

    var sqrt = Math.sqrt(Math.abs((P*P) - (16 * A)));

    var s1 = (P + sqrt)/4;

    var s2 = (P - sqrt)/4;

    return [s1, s2].sort();
}
 use