/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        var revS=s.split("").reverse()
        console.log(revS.join(""));
    
    }
    catch(err){
        console.log(err.message);
        console.log(s);
    }
}
