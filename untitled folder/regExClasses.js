// RegEx: Character Classes IX ⁠- \w
// You can think of character classes as characters with special meaning.
// They are recognized as special when you place the \ before the character.

// Here are a list of the characters classes in JavaScript:

// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// There is a hidden word in this string:

// Write the regular expression that reveals the hidden word. You have to remove all
// of the special characters to reveal the word. Use the character class \w in your expression.

// const reg = /\w+\W/g

const reg = /\w/g

// const reg = /[R,e,g,u,l,a,r,E,x,p,r,e,s,s,i,o,n,s]/g

const str = '**^&$Regular#$%Expressions$%$$%^**'

console.log(str.match(reg).join(' '))
const x = str.match(reg).join(' ')
return x
