/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var strArr = s.split('');
        strArr.reverse();
        var joinStr = strArr.join('');
        console.log(joinStr);
    }catch(error) {
        console.log(error.message);
        console.log(s);
    } finally {
        //noting
    }
}