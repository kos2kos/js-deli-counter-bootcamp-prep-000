
function takeANumber(katzDeliLine, name){
  katzDeliLine = katzDeliLine.push(name)
  var i = katzDeliLine.length
  return  `Welcome, ${name}. You are number ${i} in line.`
}