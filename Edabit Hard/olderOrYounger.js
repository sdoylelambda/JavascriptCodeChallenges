// Older Than Me
// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3, which will be initialised with the
// attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  compareAge(other) {
    // Write code here!
    console.log('o', other.age)
    console.log('o', this.age)
    if (this.age < other.age) {
      console.log(`${other.name} is older than me.`)
      return `${other.name} is older than me.`
    }
    if (this.age > other.age) {
      console.log(`${other.name} is younger than me.`)
      return `${other.name} is younger than me.`
    } else {
      console.log(`${other.name} is the same age as me.`)

      return `${other.name} is the same age as me.`
    }
  }
}
// Examples
var p1 = new Person('Samuel', 24)
var p2 = new Person('Joel', 36)
var p3 = new Person('Lily', 24)
p1.compareAge(p2) // ➞ "Joel is older than me."

p2.compareAge(p1) // ➞ "Samuel is younger than me."

p1.compareAge(p3) // ➞ "Lily is the same age as me."
