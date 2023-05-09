export function getToday() {
   let today = new Date();

   let year = today.getFullYear();
   let month = today.getMonth() <= 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
   let date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
   // 30분 전 시간의 정각(매30분마다 api 제공)
   let hour = today.getMinutes() < 40 && today.getHours() !== 0 ? today.getHours() - 1 : today.getHours();
   let min = today.getMinutes() < 40 ? '40' : today.getMinutes();

   let day =
      today.getHours() === 0 && today.getMinutes() < 40 ? `${year}${month}${date - 1}` : `${year}${month}${date}`;
   let time =
      today.getHours() === 0 && today.getMinutes() < 40 ? `2300` : today.getHours() < 10 ? `0${hour}00` : `${hour}00`;
   let refTime = today.getHours() === 0 ? `23` : today.getHours() < 10 ? `0${hour}` : `${hour}`;

   let dayAndTime = { day: day.toString(), time: time.toString(), refTime: refTime };

   return dayAndTime;
}
