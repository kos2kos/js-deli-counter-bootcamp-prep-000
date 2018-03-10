var katzDeliLine = [];

function takeANumber(line, name){
  line = line.push(name)
  var i = katzDeliLine.length
  return  `Welcome, ${name}. You are number ${line.length} in line.`
}