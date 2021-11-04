const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime() {
  const date = new Date();

  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const dayNum = date.getDate() + 1;
  const dayText = week[date.getDate()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  dateEl.innerText = `${fullYear}-${month < 10 ? "0" + month : month}-${
    dayNum < 10 ? "0" + dayNum : dayNum
  } ${dayText}`;

  timeEl.innerText = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
}

setInterval(updateTime, 1000);
