function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI=Math.PI;
    let r=readLine();
    // Print the area of the circle:
    let area;
    area=PI*(r**2);
    console.log(area);
   
    // Print the perimeter of the circle:
    let perimeter;
    perimeter=2*PI*r ;
    console.log(perimeter);
}