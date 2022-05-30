/*
 * Create the function factorial here
 */

function factorial(n) {
    if(n > 1) {
        var mul = 1;
        for(let i = 1; i<=n; i++) {
            mul *=i;
        }

        return mul;
    }

    return n;
}
