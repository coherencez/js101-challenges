// Challenge 5 

// Write a Fibonacci number generator that outputs the numbers
// in the series that are less than 500.

// Fibonacci equation:
//  F_n = F_{n-1} + F_{n-2},


// var looping = function(n) {
//     var a = 0, b = 1, f = 1;
//     for(var i = 2; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//     }
// };



// var recursive = function(n) {
//     if(n <= 2) {
//         return 1;
//     } else {
//         return this.recursive(n - 1) + this.recursive(n - 2);
//     }
// };

// Generate store and return fibonacciSequence up to desired position
var fibonacciSequence = function (n) {
    var x = 0, y = 1, f = 1, seq = [];
    for (var i = 2; i <= n; i++) {
        f = x + y;
        x = y;
        y = f;
        seq.push(f);
    }
    return seq;
};

// Find fibonacci number at any desired position (n)
var fibonacciPostion = function (n) {
    var x = 0, y = 1, f = 1;
    for (var i = 2; i <= n; i++) {
        f = x + y;
        x = y;
        y = f;
    }
    return f;
}







