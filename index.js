function countdown(callback){
  return window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
  return function(value){
    return multiplierValue*value
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(x,y){
  return x*y
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
