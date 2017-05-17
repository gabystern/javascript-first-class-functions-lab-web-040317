function countdown(callback){
  window.setTimeout(callback)
}

function createMultiplier(multiplierValue){
  return function(value){
    return multiplierValue * value
  }
}

function multiplier(x,y){
  return x*y
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
