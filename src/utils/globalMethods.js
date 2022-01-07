function formatTime(date){
  console.log(typeof(date))
  let month = date.getMonth()+1
  if (month<10) {
    month = '0'+month
  }
  let day = date.getDate()
  if(day<10){
    day = '0' + day
  }
  let hour = date.getHours()
  if(hour<10){
    hour = '0' + hour
  }
  let minute = date.getMinutes()
  if(minute<10){
    minute = '0' + minute
  }
  let second = date.getSeconds()
  if(second<10){
    second = '0' + second
  }
  return date.getFullYear()+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
}





export default {
  install: (app, options) => {
    app.config.globalProperties.$formatTime = formatTime
  }
}