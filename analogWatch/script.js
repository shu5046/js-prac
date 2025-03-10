
function updateTime() {
  const now = new Date();
  const hours = now.getHours() ;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourDeg = hours * 30 + minutes * 0.5; 
  const minuteDeg = minutes * 6; 
  const secondDeg = seconds * 6; 

  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById("min").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("sec").style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateTime, 100);
updateTime();
