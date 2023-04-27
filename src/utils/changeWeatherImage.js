export default function changeWeather(item) {
   let today = new Date();
   let realHour = today.getHours();

   if (item.find((data) => data.category === 'PTY').obsrValue === '0' && realHour > 6 && realHour <= 16) {
      // 맑은날 아침~낮
      return 'url("https://i.pinimg.com/originals/9e/79/26/9e79266ee52e0b55b6e191d45e856d13.gif")';
   } else if (item.find((data) => data.category === 'PTY').obsrValue === '0' && realHour > 16 && realHour <= 20) {
      // 맑은날 오후
      return 'url("https://i.pinimg.com/originals/80/e5/b5/80e5b5070a9a15dab79fe8d8f27378cc.gif")';
   } else if (
      item.find((data) => data.category === 'PTY').obsrValue === '0' &&
      ((realHour > 20 && realHour <= 23) || realHour <= 2)
   ) {
      // 맑은날 밤
      return 'url("https://media.tenor.com/FYZ7n9n6FYwAAAAC/cat-sky.gif")';
   } else if (item.find((data) => data.category === 'PTY').obsrValue === '0' && (realHour > 2 || realHour <= 6)) {
      // 맑은날 새벽
      return 'url("https://i.pinimg.com/originals/ba/9e/e6/ba9ee657d4d86d658b00001996f07679.gif")';
   } else if (
      // 비오는날 아침~낮
      (item.find((data) => data.category === 'PTY').obsrValue === '1' ||
         item.find((data) => data.category === 'PTY').obsrValue === '2' ||
         item.find((data) => data.category === 'PTY').obsrValue === '5') &&
      realHour > 6 &&
      realHour <= 16
   ) {
      return 'url("https://gifdb.com/images/high/beautiful-anime-sky-rain-falling-down-6ddpmu6t4o5yuqod.gif")';
   } else if (
      // 비오는날 오후
      (item.find((data) => data.category === 'PTY').obsrValue === '1' ||
         item.find((data) => data.category === 'PTY').obsrValue === '2' ||
         item.find((data) => data.category === 'PTY').obsrValue === '5') &&
      realHour > 16 &&
      realHour <= 20
   ) {
      return 'url("https://animesher.com/orig/0/89/897/8970/animesher.com_rain-gif-rainy-gif-sky-rain-897041.gif")';
   } else if (
      // 비오는날 밤
      (item.find((data) => data.category === 'PTY').obsrValue === '1' ||
         item.find((data) => data.category === 'PTY').obsrValue === '2' ||
         item.find((data) => data.category === 'PTY').obsrValue === '5') &&
      ((realHour > 20 && realHour <= 23) || realHour <= 2)
   ) {
      return 'url("https://animesher.com/orig/0/58/582/5825/animesher.com_natural-nagi-no-asukara-cute-582551.gif")';
   } else if (
      // 비오는날 새벽
      (item.find((data) => data.category === 'PTY').obsrValue === '1' ||
         item.find((data) => data.category === 'PTY').obsrValue === '2' ||
         item.find((data) => data.category === 'PTY').obsrValue === '5') &&
      (realHour > 2 || realHour <= 6)
   ) {
      return 'url("https://animesher.com/orig/0/89/897/8970/animesher.com_rain-gif-rainy-gif-sky-rain-897041.gif")';
   } else if (
      // 눈오는날 아침~낮
      (item.find((data) => data.category === 'PTY').obsrValue === '3' ||
         item.find((data) => data.category === 'PTY').obsrValue === '6' ||
         item.find((data) => data.category === 'PTY').obsrValue === '7') &&
      realHour > 6 &&
      realHour <= 16
   ) {
      return 'url("https://animesher.com/orig/0/72/727/7273/animesher.com_scenery-winter-cloudy-727335.gif")';
   } else if (
      // 눈오는날 오후
      (item.find((data) => data.category === 'PTY').obsrValue === '3' ||
         item.find((data) => data.category === 'PTY').obsrValue === '6' ||
         item.find((data) => data.category === 'PTY').obsrValue === '7') &&
      realHour > 16 &&
      realHour <= 20
   ) {
      return 'url("https://64.media.tumblr.com/618b7c4f221e79304998671d34a2de3c/d2692aeea4dcc29c-b5/s540x810/9a22c5e0e971f3024d1e90479f629610415421ff.gif")';
   } else if (
      // 눈오는날 저녁
      (item.find((data) => data.category === 'PTY').obsrValue === '3' ||
         item.find((data) => data.category === 'PTY').obsrValue === '6' ||
         item.find((data) => data.category === 'PTY').obsrValue === '7') &&
      ((realHour > 20 && realHour <= 23) || realHour <= 2)
   ) {
      return 'url("https://media.tenor.com/FjYVWQxY-wYAAAAC/winter-night-sky.gif")';
   } else if (
      // 눈오는날 새벽
      (item.find((data) => data.category === 'PTY').obsrValue === '3' ||
         item.find((data) => data.category === 'PTY').obsrValue === '6' ||
         item.find((data) => data.category === 'PTY').obsrValue === '7') &&
      (realHour > 2 || realHour <= 6)
   ) {
      return 'url("https://animesher.com/orig/1/105/1055/10555/animesher.com_5-centimeters-per-second-snowy-sky-snow-1055595.gif")';
   }

   // if (realHour > 2 && realHour <= 16) {
   //    return 'url("https://i.pinimg.com/originals/9e/79/26/9e79266ee52e0b55b6e191d45e856d13.gif")';
   // } else if (realHour > 16 && realHour <= 20) {
   //    return 'url("https://i.pinimg.com/originals/80/e5/b5/80e5b5070a9a15dab79fe8d8f27378cc.gif")';
   // } else if ((realHour > 20 && realHour <= 23) || realHour <= 2) {
   //    return 'url("https://media.tenor.com/FYZ7n9n6FYwAAAAC/cat-sky.gif")';
   // } else {
   //    return 'url("https://i.pinimg.com/originals/ba/9e/e6/ba9ee657d4d86d658b00001996f07679.gif")';
   // }
}
