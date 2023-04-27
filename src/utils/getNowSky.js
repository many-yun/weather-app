export default function getNowSky(item) {
   if (item.find((data) => data.category === 'PTY').obsrValue === '0') {
      return '맑음';
   } else if (item.find((data) => data.category === 'PTY').obsrValue === '1') {
      return '비';
   } else if (item.find((data) => data.category === 'PTY').obsrValue === '2') {
      return '비와 눈';
   } else if (item.find((data) => data.category === 'PTY').obsrValue === '3') {
      return '눈';
   } else if (item.find((data) => data.category === 'PTY').obsrValue === '5') {
      return '빗방울';
   } else if (item.find((data) => data.category === 'PTY').obsrValue === '6') {
      return '빗방울과 눈날림';
   } else if (item.find((data) => data.category === 'PTY').obsrValue === '7') {
      return '눈날림';
   }
}
