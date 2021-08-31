



function makeNewID() {
  const d = new Date()

  var m = Number(d.getMonth()) + 1
  var h = Number(d.getHours())

  if (m < 10) {
    month = '0' + m.toString()
  } else {
    month = m.toString()
  }
  if (h < 10) {
    hour = '0' + h.toString()
  } else {
    hour = h.toString()
  }

  return d.getFullYear() + '-' + month + '-' + d.getDate() + '-' + hour + '-' + d.getMinutes()
}






const toolkit = {
  makeNewID: makeNewID
}

export default toolkit
