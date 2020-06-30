// Formatting Text on Edabit
// The important thing when a comment is posted on Edabit is its content. But when a comment is formatted in the right way, it will be properly shown and it will be easily readable by everyone.

// In this challenge, you have to format a word using four specific methods of the Markdown language that is used by Edabit to format the text in the Comments tab and the Instructions tab (during the creation, or the translation, of a challenge). Each of these four methods (or styles) is identified by the lowercased initial letter of its name:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough
// You are given two parameters: a string word being the word to format, and another string style being the lowercased initial of the style to apply. You have to implement a function that returns a string being the word surrounded by the special characters used to apply the given style.

// Examples
// To correctly apply a format, the word has to both start and end with one or two specific special characters. There are no spaces between the characters and the word. You can find the characters to use for this challenge and how to return the result in the Comments tab! Just click on the Formatting Help link that you can find in the Comments tab of this challenge:

function mdFormat(word, style) {
  console.log('word', word)
  console.log('style', style)
  if (style === 'b') {
    console.log('b:', word)
    const boldWord = word
    console.log('boldWord:', `**${boldWord}**`)
    return `**${boldWord}**`
  }
  if (style === 'i') {
    console.log('i:', word)
    const wordItalics = word
    console.log('wordItalics:', `_${wordItalics}_`)
    return `_${wordItalics}_`
  }
  if (style === 'c') {
    console.log('c:', word)
    const codeWord = word
    console.log('`' + `${codeWord}` + '`')
    return '`' + `${codeWord}` + '`'
  }
  if (style === 's') {
    console.log('s:', word)
    const strikeWord = word
    console.log('strikeWord', `~~${strikeWord}~~`)
    return `~~${strikeWord}~~`
  }
}

Test.assertEquals(mdFormat('Bold', 'b'), '**Bold**')
Test.assertEquals(mdFormat('Italics', 'i'), '_Italics_')
Test.assertEquals(mdFormat('Code', 'c'), '`Code`')
Test.assertEquals(mdFormat('Ruby', 's'), '~~Ruby~~')
Test.assertEquals(mdFormat('JavaScript', 'b'), '**JavaScript**')
Test.assertEquals(mdFormat('Python', 'i'), '_Python_')
Test.assertEquals(mdFormat('C++', 'c'), '`C++`')
Test.assertEquals(mdFormat('Strikethrough', 's'), '~~Strikethrough~~')
