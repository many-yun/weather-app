export default function getWeeklySky(item) {
   if (item.find((data) => data.category === 'PTY').fcstValue === '1') {
      return '비';
   } else if (item.find((data) => data.category === 'PTY').fcstValue === '2') {
      return '비와 눈';
   } else if (item.find((data) => data.category === 'PTY').fcstValue === '3') {
      return '눈';
   } else if (item.find((data) => data.category === 'PTY').fcstValue === '5') {
      return '빗방울';
   } else if (item.find((data) => data.category === 'PTY').fcstValue === '6') {
      return '빗방울과 눈날림';
   } else if (item.find((data) => data.category === 'PTY').fcstValue === '7') {
      return '눈날림';
   } else if (
      item.find((data) => data.category === 'PTY').fcstValue === '0' &&
      item.find((data) => data.category === 'SKY').fcstValue === '1'
   ) {
      return '맑음';
   } else if (
      item.find((data) => data.category === 'PTY').fcstValue === '0' &&
      item.find((data) => data.category === 'SKY').fcstValue === '3'
   ) {
      return '구름많음';
   } else if (
      item.find((data) => data.category === 'PTY').fcstValue === '0' &&
      item.find((data) => data.category === 'SKY').fcstValue === '4'
   ) {
      return '흐림';
   }
}
