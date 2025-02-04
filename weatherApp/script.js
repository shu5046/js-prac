const input = document.getElementById("input");
const search = document.getElementById("search");
const card = document.getElementById("card");
const innerDiv = document.createElement("div");

search.addEventListener("click", () => {
   displayCard(input.value.trim());
});
async function displayCard(city) {
  innerDiv.innerHTML = "";
  card.classList.remove("card");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"8367fb2af395605e5e2643c744713d30"}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temp = data.main.temp - 273;
      const icon = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
      const desc = data.weather[0].description.toUpperCase();
      
      innerDiv.innerHTML = `
      <h2>${city.toUpperCase()}</h2>
      <p>${temp.toFixed(2)}</p>
      <img src="${iconUrl}" >
      <p> ${desc}<p>
      `;
      card.appendChild(innerDiv);
      card.classList.add("card");
    });
}

//
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
