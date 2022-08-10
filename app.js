const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

setInterval(() => {
  const currDate = new Date();

  const secDeg = (currDate.getSeconds() / 60) * 360;
  const minDeg = (currDate.getMinutes() / 60) * 360;
  const hourDeg = (currDate.getHours() / 12) * 360;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
