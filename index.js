var katzDeliLine = [];

function takeANumber(line, name){
  line = line.push(name)
  return  `Welcome, ${name}. You are number ${line} in line.`
}

function nowServing(line){
  var temp = line.pop()
  if (line === 0){
    return"There is nobody waiting to be served!"
  } else{
    return `Currently serving ${temp}.`
  }
}
function currentLine(line){
  var temp = 
  if (line === 0){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line; i++){
      
    }
  }
}