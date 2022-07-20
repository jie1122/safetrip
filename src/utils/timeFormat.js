export default {
  formatDateTime(date){
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
  },
  formatDate(date) {
    let month = date.getMonth()+1
    if (month<10) {
      month = '0'+month
    }
    let day = date.getDate()
    if(day<10){
      day = '0' + day
    }

    return date.getFullYear()+'年'+month+'月'+day+'日'
  },
  formatTime(date){

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
    return hour+':'+minute+':'+second
  },
}
