setInterval(clock, 1000);

function clock() {
  const hourHand = document.querySelector(".hrs");
  const minuteHand = document.querySelector(".min");
  const secondHand = document.querySelector(".sec");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;
  hourHand.style.transform = `rotate(${hourDegrees - 90}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees - 90}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees - 90}deg)`;
}

clock();

function digiclock() {
  let Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const now = new Date();
  const Hour = now.getHours().toString().padStart(2, "0");
  const Min = now.getMinutes().toString().padStart(2, "0");
  const Year = now.getFullYear();
  const Datte = now.getDate();
  const day = Days[now.getDay()];
  const month = Months[now.getMonth()];
  document.querySelector(".time").textContent = `${Hour}:${Min}`;
  document.querySelector(
    ".date"
  ).textContent = `${day}, ${Datte} ${month} ${Year}`;
}
setInterval(digiclock, 60000);
digiclock();
function toggledark() {
  let status = document.querySelector(".lirk");
  let mainLight = document.querySelectorAll(".light-theme1");
  let pointHand = document.querySelectorAll(".light-theme2");
  let digiCont = document.querySelector(".digi-cont");
  let slider = document.querySelector(".sliderknob");
  if (status.textContent === "light") {
    status.textContent = "Dark";
    mainLight.forEach((element) => {
      element.classList.add("main-light");
    });
    pointHand.forEach((el) => {
      el.classList.add("point-hand");
    });
    digiCont.classList.add("digi-light");
    document.querySelector(".toggle-button").style.backgroundColor = "black";
    slider.classList.add("dark-slider");
    document.querySelector(".sun").style.fill = "#747474"
    document.querySelector(".moon").style.fill = "black"

  } else {
    status.textContent = "light";
    mainLight.forEach((element) => {
      element.classList.remove("main-light");
    });
    pointHand.forEach((el) => {
      el.classList.remove("point-hand");
    });
    digiCont.classList.remove("digi-light");
    document.querySelector(".toggle-button").style.backgroundColor = "white";
    slider.classList.remove("dark-slider");
    document.querySelector(".sun").style.fill = "black"
    document.querySelector(".moon").style.fill = "#4b4b4b"
  }
}
