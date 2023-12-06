/* eslint-disable eqeqeq */

function timeConversion(s) {
  let [hour, minute, time] = s.split(':');
  let newTime;

  if (time.endsWith('AM')) {
    if (hour == '12') {
      hour = '00';
    }
    newTime = `${hour}:${minute}:${time[0]}${time[1]}`;
  } else if (time.endsWith('PM')) {
    if (hour != '12') {
      hour = String(hour * 1 + 12);
    }
    newTime = `${hour}:${minute}:${time[0]}${time[1]}`;
  }

  return newTime;
}

console.log(timeConversion('1:02:02PM'));
