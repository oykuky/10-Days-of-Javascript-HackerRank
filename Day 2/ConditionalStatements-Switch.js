function getLetter(s) {
    let letter;
    // Write your code here
    const A=['a','e','i','o','u'];
    const B=['b','c','d','f','g'];
    const C=['h','j','k','l','m'];
    const D=['n','p','q','r','s','t','v','w','x','y','z'];
    let FirstL=s.charAt(0);
    switch(true){
        case A.includes(FirstL) :
        letter='A';
        break;
        
        case B.includes(FirstL) :
        letter='B';
        break;
        
        case C.includes(FirstL) :
        letter='C';
        break;
        
        default :  // case D.includes(FirstL);
        letter='D';
        break;
        
    }
    
    return letter;
}