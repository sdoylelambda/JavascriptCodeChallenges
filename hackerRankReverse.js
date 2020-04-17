// UPER
// U 
// REVERSE CHARACTERS IN (POSSIBLY NESTED) STRING THAT ARE IN PARANTHESES
// DON'T REVERSE CHARS NOT IN PARANTHESES

// EX: INPUT foo(bar(baz))blim   OUTPUT: foobazrabblim
//    ABOVE ACHIEVED BY:
//    REVERSE INNERMOST STRING: (baz) returns: foo(barzab)blim
//    THEN REVERSE (barzab) RETURNS: foobazrabblim

// EX2: INPUT: foo(bar)baz(blim)boo  OUTPUT: foorabbazmibboo

// NOTES
// TEST CASES ARE (TEST) LIKE EXAMPLES AND (((((((TEST)))))))


function reverseInParentheses(s) {
  // FIND () IN STRING
  // FIND INNERMOST ()
  // REVERSE CHARS
  // NEXT OUTERMOST ()
  // REVERSE CHARS
  // 

}

reverseInParentheses(foo(bar(baz))blim) // OUTPUT: foobazrabblim

reverseInParentheses(foo(bar)baz(blim)boo) // OUTPUT: foorabbazmibboo