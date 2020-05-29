// RegEx XX : Group Ranges ⁠— Named Capturing Groups (?<Name>x)
// Groups and ranges indicate groups and ranges of expression characters. Named capturing groups matches "x" in (?\<Name>x) and stores it on the groups property of the returned matches under the name specified by \<Name>. The angle brackets (< and >) are required for group name.

// To extract the United States area code from a phone number, we could use:

// WORKS = GET NUMBERS IN PARANTHISIS
let match = '(214) 987-6482'.match(/\((?<area>\d\d\d)\)/)
console.log(match.groups.area) // ➞ 214

/* Grab the year, month and day from a string of dates. Name your groups with year, month, and day 
and in that order in your expression. You only have to come up with the regular expression. 
The replace() function is already implemented in the test.

Dates do not go back before 1900.
Dates always come in year-month-day format. */

// declare year, month and day with => ?<day> etc
let REGEXP = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g
let str = '2019-10-30, 2020-01-01'

console.log(str.replace(REGEXP, '$<day>.$<month>.$<year>')) //➞ "30.10.2019, 01.01.2020"
console.log(str)

// const str1 = '2019-10-30, 2020-01-01'
// const str2 = '2020-11-14, 1947-01-30, 1955-04-12'
// const str3 = '2001-03-09, 1988-12-19, 1918-03-20, 1969-08-15'
