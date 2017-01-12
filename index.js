function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var dudesOnBrunch = ["Alec", "Slobby Slaps", "Roy", "Ky", "Wenty", "Penna"]
  dudesOnBrunch.forEach(callback)
  return dudesOnBrunch
}

function doToArray(array, callback){
  array.forEach(callback)
}