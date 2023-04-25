function getToday() {
   let today = new Date();

   let year = today.getFullYear();
   let month = today.getMonth() <= 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
   let date = today.getDate();
   // 30분 전 시간의 정각(매30분마다 api 제공)
   let hour = today.getMinutes() < 30 ? today.getHours() - 1 : today.getHours();
   let min = today.getMinutes() < 30 ? '30' : today.getMinutes();

   let day = today.getMinutes() === '00' ? `${year}${month}${date - 1}` : `${year}${month}${date}`;
   let time = today.getHours() === '0' ? `${23}${min}` : today.getHours() < 10 ? `0${hour}${min}` : `${hour}${min}`;

   let dayAndTime = { day: day.toString(), time: time.toString() };

   return dayAndTime;
}

export default getToday;
