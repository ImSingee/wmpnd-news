function formatTime(d) {
  let hour = d.getHours()
  let minute = d.getMinutes()
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  return `${hour}:${minute}`
}

export default {
  formatTime
}