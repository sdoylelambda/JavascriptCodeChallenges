// Decompose Address
// Create a function that decomposes an address string into an array of five substrings:

// Street Number
// Street Name
// City Name
// State
// Zip Code

// Notes
// All street extensions will be shortened to two-letter formats.

// UPER
// U - UNDERSTAND
// BREAK STRING INTO ARRAY:
// 1ST: NUMBER
// 2ND: FROM NUMBER TILL STREET ABR. (STRING)
// 3RD: FROM ABR. COMA (STRING)
// 4RD: 2 CAP LETTERS (STRING)
// 5TH: LAST NUMBER

// P - PLAN
// CREATE OUTPUT ARRAY
// SET VARIABLES FOR VALUES
// ADD TO ARRAY
// RETURN ARRAY

// function decomposeAddress(str) {
//   // CREATE OUTPUT ARRAY
//   const outputArr = []
//   // SET VARIABLES FOR VALUES
//   var streetNumber = '557'
//   var streetName = 'Farmer Rd'
//   var cityName = 'Corner'
//   var state = 'MT'
//   var zipCode = '59105'

//   const streetNumberRegEx = /^(\d+)/
//   streetNumber = str.match(streetNumberRegEx)
//   console.log('streetNumber:', streetNumber[0])
 
//   const streetNameRegEx = /d/
//   streetName = str.split(' ')
//   console.log('streetName:', streetName)

//   // const cityNameRegEx = /d/
//   // cityName = str.match(cityNameRegEx)

//   // const stateRegEx = /d/
//   // state = str.match(stateRegEx)

//   // const zipCodeRegEx = /d/
//   // zipCode = str.match(zipCodeRegEx)

//   // ADD TO ARRAY
//   outputArr.push(streetNumber[0], streetName, cityName, state, zipCode)

//   // RETURN ARRAY
//   console.log('str:', str)
//   console.log('output:', outputArr)

//   return outputArr
// }





function decomposeAddress(str) {

  const res = str.replace(/[, ]+/g, " ").trim();
  console.log('res', res)
  // CREATE OUTPUT ARRAY
  const outputArr = []
  // SET VARIABLES FOR VALUES
  var streetNumber = '557'
  var streetName = 'Farmer Rd'
  var cityName = 'Corner'
  var state = 'MT'
  var zipCode = '59105'

  var strArr = res.split(' ')

  streetNumber = strArr[0]
  streetName = strArr[1] + ' ' + strArr[2]
  console.log('streetname:', streetName)
  cityName = strArr[3]
  state = strArr[4]
  zipCode = strArr[5]
  console.log('strArr:', strArr)
  
  if (strArr.length === 6) {
  
  outputArr.push(streetNumber)
  outputArr.push(streetName)
  outputArr.push(cityName)
  outputArr.push(state)
  outputArr.push(zipCode)
  } else {

    streetNumber = strArr[0]
    streetName = strArr[1] + ' ' + strArr[2]
    console.log('streetname:', streetName)
    cityName = strArr[3] + ' ' + strArr[4]
    state = strArr[5]
    zipCode = strArr[6]
    console.log('strArr:', strArr)

    outputArr.push(streetNumber)
    outputArr.push(streetName)
    outputArr.push(cityName)
    outputArr.push(state)
    outputArr.push(zipCode)

  }

  // RETURN ARRAY
  console.log('str:', str)
  console.log('output:', outputArr)
  return outputArr
}



// Examples
decomposeAddress('557 Farmer Rd Corner, MT 59105')
// ➞ ["557", "Farmer Rd", "Corner", "MT", "59105"]

// decomposeAddress('3315 Vanity St Beverly Hills, CA 90210')
// ➞ ["3315", "Vanity St", "Beverly Hills", "CA", "90210"]

// decomposeAddress('8919 Scarecrow Ct Idaho Falls, ID 80193')
// ➞ ["8919", "Scarecrow Ct", "Idaho Falls", "ID", "80193"]



// const streetNumberRegExDelete = /((.*)T(.*)\..*",'$1 $2')/
// streetNumberDelete = str.match(streetNumberRegExDelete)