"use strict";

window.addEventListener("load", start);

async function start() {
  const harry = await getGibHubUser("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json");
  showGitHubUser(harry);

  const ron = await getGibHubUser("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/ron.json");
  showGitHubUser(ron);

  const hermione = await getGibHubUser("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/hermione.json");
  showGitHubUser(hermione);

  const severus = await getGibHubUser("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/severus.json");
  showGitHubUser(severus);
}

async function getGibHubUser(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showGitHubUser(user) {
  const html = /*html*/ `
    <section>
        <h2>
        Name: <span> ${user.name}</span>
        </h2>
        <h2>Actor:${user.actor}</h2>
        <image src="${user.image}"></image>
        <p>Ancestry: ${user.ancestry}</p>
        <p>Gender: ${user.gender}</p>
    </section>
    
    
    `;
  document.querySelector("body").insertAdjacentHTML("beforeend", html);
}
