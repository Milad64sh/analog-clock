const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

const currDate = new Date();

const secDeg = (currDate.getSeconds() / 60) * 360;
secondHand.style.transform = `rotate(20deg)`;
const minDeg = (currDate.getSeconds() / 60) * 360;
minuteHand.style.transform = `rotate(30deg)`;
const hrDeg = (currDate.getSeconds() / 12) * 360;
hourHand.style.transform = `rotate(20deg)`;
