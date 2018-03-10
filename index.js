var katzDeliLine = [];

function takeANumber(line, name){
  line = line.push(name)
  return  `Welcome, ${name}. You are number ${line} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return"There is nobody waiting to be served!"
  } if (line.length > 0){
    var temp = line[0]
    line.pop()
    return `Currently serving ${temp}.`
  }
}

function currentLine(line){
  var temp = "The line is currently:"
  if (line.length === 0){
    return "The line is currently empty."
  } if (line.length > 0) {
    for (var i = 0; i < line; i++){
      temp = temp + ` ${i + 1}. ${line[i]},`
    }return temp
  }
}