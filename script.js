"use strict";

window.addEventListener("load", start);

async function start() {
  const harry = await getGibHubUser("harry");
  showGitHubUser(harry);
  console.log(harry);
}

async function getGibHubUser(character) {
  const response = await fetch(`https://raw.githubusercontent.com/cederdorff/dat-js/main/data/${character}.json`);
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
