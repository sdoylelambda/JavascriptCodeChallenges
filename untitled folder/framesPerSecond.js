// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
// Assume the screen produces 60 frames every second.

function frames(minutes, fps) {
  const frameCount = minutes * fps * 60
  console.log(frameCount)
  return frameCount
}

// Examples
frames(1, 1) //➞ 60
//xfirstnumber x60

frames(10, 1) // ➞ 600

frames(10, 25) //➞ 15000
