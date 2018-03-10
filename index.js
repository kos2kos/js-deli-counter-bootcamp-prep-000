var katzDeliLine = [];

function takeANumber(line, name){
  line = line.push(name)
  return  `Welcome, ${name}. You are number ${line} in line.`
}

function nowServing(line){
  var temp = line.pop()
  if (line === 0){
    return"There is nobody waiting to be served!"
  } if (line > 0){
    return `Currently serving ${temp}.`
  }
}
function currentLine(line){
  var temp = "The line is currently:"
  if (line === 0){
    return "The line is currently empty."
  } if (line > 0) {
    for (var i = 0; i < line; i++){
      temp = temp + ` ${i + 1}. ${line[i]},`
    }return temp
  }
}