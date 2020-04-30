// WORKED FOR CODE CHALLENGE, ERRORS ON VSCODE

// Video Streaming Plans
// Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
// Notes
// Try to extend the classes to complete the challenge!

// BasicPlan	StandardPlan	PremiumPlan
// ✓	            ✓	            ✓	        canStream
// ✓	            ✓	            ✓	        canDownload
// ✓	            ✓	            ✓	        hasSD
// ✓	            ✓	                      hasHD
// ✓	                                    hasUHD
// 1	            2	            4	        numOfDevices
// $8.99	      $12.99	      $15.99	    price

class BasicPlan {
  static canStream = true
  static canDownload = true
  static numOfDevices = 1
  static hasSD = true
  static hasHD = false
  static hasUHD = false
  static price = '$8.99'
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan extends BasicPlan {
  static canStream = true
  static canDownload = true
  static hasSD = true
  static hasHD = true
  static hasUHD = false
  static numOfDevices = 2
  static price = '$12.99'
}
class PremiumPlan extends BasicPlan {
  static canStream = true
  static canDownload = true
  static hasSD = true
  static hasHD = true
  static hasUHD = true
  static numOfDevices = 4
  static price = '$15.99'
}

// Examples

BasicPlan.hasSD // ➞ true

PremiumPlan.hasSD // ➞ true

BasicPlan.hasUHD // ➞ false

BasicPlan.price // ➞ '$8.99'

PremiumPlan.numOfDevices //➞ 4
