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
  hourHand.style.transform = `rotate(${hourDegrees-90}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees-90}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees-90}deg)`;
}

clock();

function digiclock() {
    let Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    const now = new Date()
    const Hour = now.getHours()
    const Min = now.getMinutes()
    const Year = now.getFullYear()
    const Datte = now.getDate()
    const day = Days[now.getDay()]
    const month  = Months[now.getMonth()]
    document.querySelector(".time").textContent = `${Hour}:${Min}`
    document.querySelector(".date").textContent = `${day}, ${Datte} ${month} ${Year}`
}
setInterval(digiclock, 60000);
digiclock();