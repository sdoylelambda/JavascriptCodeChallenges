for a = [1, 2, 3] b = [10, 20, 30, 40] v = 42
// output
sumOfTwo(a, b, v) // = true

// def sumOfTwo(a, b, v):
//     # O(len(a) * len(b)) ~ O(n^2)
//     # loop through a: O(len(a))
//         # loop through b: O(len(b))
//             # sum value from a + value from b: O(1)
//             # if the sum == v: O(1)
//                 # return true 
//     # return false

//     # O(len(a) + len(b)) ~ O(n): runtime
//     # O(n): space 
//     # use a dict to keep track of the diffs between v and all the values 
//     # from one of the lists 
//     # dict = { 41, 40, 39 }  a in dict: O(1)
//     # list = [ 41, 40, 39 ]  a in list: O(n)
//     # loop through a: O(len(a))
//         # diff = v - a: O(1)
//         # store diff in an object/dict: O(1)
//     # look through the other array: O(len(b))
//         # check to see if the current element is contained in our dict: O(1)
//         # return true if we find it 
//     # return false

//     # are these arrays sorted?
//     # no, don't assume arrays are sorted
//     # what if we took the time to sort the arrays? 
//     # still figure out the diffs from one of the arrays 
//     # binary search through the other array for the diff values 

//     # O(len(a) log len(a) + len(b) log len(b) + len(a) + len(b))
//     # O(1) space 
//     # a = [1, 2, 3]
//     # b = [10, 20, 30, 40]
//     # v = 41
//     # if a + b < v, we need a bigger value 
//     # sort both arrays: O(2 * n log n)
//     # increment one of the arrays so that it's looking at a bigger value 
//     # if we start both arrays at their first elements, that's no better than
//     # a nested loop strategy 
//     # O(len(a) + len(b))
//     # what if we start at the beginning of one of the arrays 
//     # start at the end of the other 
//     # two-pointer idea: start one of the pointers at one end of an array, 
//     # start the pointer at the other end of the other array 
//     # so when we need a smaller value, decrement the pointer that's on the 
//     # right side of its array 
//     # when we need a larger value, increment the pointer that's on the left 
//     # side of its array 