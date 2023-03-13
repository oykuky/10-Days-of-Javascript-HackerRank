/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
// JAVA

// A
// A
// J
// V
function vowelsAndConsonants(s) {
    const vowels=['a','e','i','o','u']
    for(let i of s){
        if (vowels.includes(i))
            console.log(i)
    }
    for(let i of s){
        if(!vowels.includes(i))
            console.log(i)
    }
}