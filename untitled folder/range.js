const arr = [['First paragraph]',
['Second paragraph'],
['Third paragraph'],
['fourth paragraph.'],]
// JavaScript


// Create new range
const range = new Range();

// Start range at second paragraph
range.setStartBefore(arr[1]);

// End range at third paragraph
range.setEndAfter(arr[2]);

// Get window selection
const selection = window.getSelection();

// Add range to window selection
selection.addRange(range);