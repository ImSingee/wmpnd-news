function twoDigital(num) {
  if(num < 10) {
    return '0' + num
  } else {
    return num
  }
}

function formatTime(d) {
  let month = twoDigital(d.getMonth())
  let date = twoDigital(d.getDate())
  let hour = twoDigital(d.getHours())
  let minute = twoDigital(d.getMinutes())
  
  return `${month}-${date} ${hour}:${minute}`
}

export default {
  formatTime
}