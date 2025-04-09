// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//to safe global scope polution and also add ";" in last for stop!

( (name) => {
    // bina name ka IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
