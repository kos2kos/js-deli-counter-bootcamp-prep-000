var katzDeliLine = [];

function takeANumber(line, name){
  line = line.push(name)
  return  `Welcome, ${name}. You are number ${line} in line.`
}

function nowServing(line){
  var temp = line.pop()
  if (line === 0){
    return 
  }
}
function currentLine(line){
  if (line === 0){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line; i++){
      
    }
  }
}