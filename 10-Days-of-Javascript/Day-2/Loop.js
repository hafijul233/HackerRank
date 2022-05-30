
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowelRegex = new RegExp('[aeiou]', 'gi');
    const vowelArray = s.match(vowelRegex);

    let consonentRegex = new RegExp('[bcdfghjklmnpqrstvwxys]', 'gi');
    const consonentArray = s.match(consonentRegex);

    for(let char in vowelArray) {
        console.log(vowelArray[char]);
    }

    for(let char in consonentArray) {
        console.log(consoArray[char]);
    }

}