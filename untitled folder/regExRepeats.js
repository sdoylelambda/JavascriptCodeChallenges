// RegEx XVII : Quantifiers - x{n}, x{n,}, x{n,}
// Quantifiers indicate numbers of characters or expressions to match.

// x{n}
// Where n is a positive integer, matches exactly n occurrences of the preceding item x.

// "candy".match(/a{2}/) ➞ null
// "caandy".match(/a{2}/) ➞ "aa"
// x{n,}
// Where n is a positive integer, matches at least n occurrences of the preceding item x.

console.log('ex line 12: - null -', 'candy'.match(/a{2,}/)) // ➞ null
console.log('ex line 13: - "aa" -', 'caandy'.match(/a{2,}/)) // ➞ "aa"
console.log("ex line 14: - 'aaaaa'", 'caaaaaaaaandy'.match(/a{2,}/)) // ➞ "aaaaaa"
// x{n,m}
// Where n is 0 or a positive integer, m is a positive integer, and m > n,
// matches at least n and at most m occurrences of the preceding item x.

// console.log('cndy'.match(/a{1,3}/)) // ➞ null
// console.log('candy'.match(/a{1,3}/)) // ➞ "a"
// console.log('caandy'.match(/a{1,3}/)) // ➞ "aa"
// "caaaaaaaaaaandy".match(/a{1,3}/) ➞ "aaa"
// Create a RegExp to find ellipsis: 3 (or more?) dots in a row.
// Use one of the 3 quantifiers above in your solution.

const REGEXP = /[.]{3,}/g
console.log(
  'FINAL',
  'Hello!... Wait. How zzzzaaaaagoes?aaa.....aaa GoodBye!..'.match(REGEXP)
) //➞ "..., ....."
