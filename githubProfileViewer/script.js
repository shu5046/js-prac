const input = document.getElementById("input");
const btn = document.getElementById("btn");
const card = document.createElement("div");
const cardContainer = document.querySelector(".card-container");

btn.addEventListener("click", () => {
  getProfile(input.value);
});

async function getProfile(id) {
  card.classList.remove("card");
  try {
    const response = await fetch(` https://api.github.com/users/${id}`);
    if (!response.ok) {
      throw new Error("Username is not correct");
    } else {
      const data = await response.json();
      card.innerHTML = `<p>NAME: ${id}</p>
        <p>BIO: ${data.bio || "N/A"}</p>
        <p>LOCATION: ${data.location || "N/A"}</p>
        <p>FOLLOWERS: ${data.followers || "N/A"}</p>
        <pFOLLOWING: ${data.following || "N/A"}</p>
        <p>PUBLIC REPOS: ${data.public_repos}</p>
        <a href="${data.html_url}">View Profile on Github</a>`;
      card.classList.add("card");
      cardContainer.appendChild(card);
    }
  } catch (err) {
    card.innerHTML = `<p style="color:red;">${err.message}</p>`;
    card.classList.add("card");
    cardContainer.appendChild(card);
  }
}
