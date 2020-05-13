const clock = document.querySelector('.clock');
const today = document.querySelector('.today');

const dayArr = ['일', '월', '화', '수', '목', '금', '토'];

function getTime() {
  const DATE = new Date();
  const hour = DATE.getHours();
  const minute = DATE.getMinutes();
  const second = DATE.getSeconds();
  const year = DATE.getFullYear();
  const month = DATE.getMonth() + 1;
  const date = DATE.getDate();
  const day = `${dayArr[DATE.getDay()]}요일`;
  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}시${minute < 10 ? `0${minute}` : minute}분 `;
  today.innerHTML = `${year} ${month}/${date} ${day}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();