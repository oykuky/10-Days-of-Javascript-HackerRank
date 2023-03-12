/*
 * Create the function factorial here
 */

//Recursive solutions
function factorial(n){
    
    if(n == 1){
        return n ;
    }
    else{
        return n * factorial(n-1);
    }
   
}


// OR try this code block
function factorial(n){
    let x=1;
    for(let i=n;i>0;i--){
        x*=i; //x=x*i
    }
    return x;
}
