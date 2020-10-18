// Given a positive integer number n, your task is to calculate the difference between the product of its digits and the sum of its digits.

// Note: The order matters; the answer should be of the form product - sum (and not sum - product).

// Example

// For n = 123456, the output should be digitsManipulations(n) = 699.


// UPER
// U - UNDERSTAND
// FIRST 
// The product of the digits is equal to 1 * 2 * 3 * 4 * 5 * 6 = 720.
// SECOND
// The sum of the digits is equal to 1 + 2 + 3 + 4 + 5 + 6 = 21.
// THIRD
// So the final answer is 720 - 21 = 699.


// C# SYNTAX
string helloWorld(string name) {
  Console.Write("This prints to the console when you Run Tests");
  return "Hello, " + name;
}

// C#
// 1234
int digitsManipulations(int n) {
  int multipliedNums = 1;
     Console.Write(multipliedNums);
  for (int i = 0; i < n.length() - 1; i++) {
      int num = n.charAt(i);
      multipliedNums * num;
  }
  
  // SECOND
  // add all numbers store in variable bravo
  
    int addedNums = 1; // should now be variable alpha
     Console.Write(addedNums);
  for (int i = 0; i < n.length ; i++) { 
      int num = n.charAt(i);
      addedNums * num;
  }
  
  // THIRD
  // return alpha - bravo
  return multipliedNums - addedNums;
}

// P - PLAN
// FIRST TIME SOLVING A CODE CHALLENGE IN C#  
// WRITE/SOLVE IT IN JAVASCRIPT
// TRANSPOSE/REFACTOR INTO C#
// TIME FOR DOCS! YUP HMM HOWS TIME... 30M MIN IN.. TIME TO MOVE ON.

// E - EXECUTE
// (Javascript)
// const n = 123456

// function digitsManipulations(n) {
//     // convert 123456 to arr
//     //    const numArr = n.s
//     // FIRST 
//     // multiply all numbers store in variable alpha
//     // for loop - mult all

//     var multipliedNums = 1 // should now be variable alpha
//        console.log('multipliedNums:', multipliedNums)
//     for (var i = 0; i < n.length - 1; i++) {
//         const num = n.charAt(i)
//         multipliedNums * num
//     }
  
//     // SECOND
//     // add all numbers store in variable bravo
  
//       var addedNums = 1 // should now be variable alpha
//        console.log('addedNums:', addedNums)
//     for (var i = 0; i < n.length ; i++) { 
//         const num = n.charAt(i)
//         addedNums * num
//     }
  
//     // THIRD
//     // return alpha - bravo
//     return multipliedNums - addedNums
// }

// should be good for js, maybe not.. well close enough lets make it happen in C#!! ok seems like java sortof..