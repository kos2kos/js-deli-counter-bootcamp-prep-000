var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  return [`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`]
}
function nowServing(katzDeliLine){
  
  if (katzDeliLine.length === 0){
    return ["There is nobody waiting to be served!"]
  }
  var temp = katzDeliLine.shift()
  return `Currently serving ${temp}.`
}
function currentLine(line){
  var sentence = `The line is currently: ${line.length}. `
  if (line.length === 0){
    return `The line is currently empty.`
  } else {
    for (var i = 1; i < line.length; i++){
        sentence = sentence + `${line[i]}, ${i}.`
    }
  }
}