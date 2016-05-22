// Challenge 5 

// Write a Fibonacci number generator that outputs the numbers
// in the series that are less than 500.

//  F_n = F_{n-1} + F_{n-2},


var looping = function(n) {
    var a = 0, b = 1, f = 1, seq = [];
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
        if (f < 500) {
        seq.push(f);
      }
    }

    return seq;
};



// var recursive = function(n) {
//     if(n <= 2) {
//         return 1;
//     } else {
//         return this.recursive(n - 1) + this.recursive(n - 2);
//     }
// };





