/*image hover */


const avatar = document.querySelector('body > section:nth-of-type(1) > img')
const h1 = document.querySelector('h1');

function hoverActivate(){
  h1.classList.add('scale');
}

function hoverDeactivate(){
  h1.classList.remove('scale');
}

avatar.addEventListener("mouseover", hoverActivate);
avatar.addEventListener("mouseout", hoverDeactivate);

/*krijg json info uit json bestand*/

const naam = document.querySelector("h1");

async function FetchData() {
  const response = await fetch("./json/info.json");
  const data = await response.json();

  naam.innerHTML = data.naam;
}

FetchData();

/*poging tot carousel (ik heb geen idee wat ik doe)*/

const listItem1 = document.querySelector("li:nth-of-type(1)")
const listItem2 = document.querySelector("li:nth-of-type(2)")
const listItem3 = document.querySelector("li:nth-of-type(3)")
const listItem4 = document.querySelector("li:nth-of-type(4)")






/*window.onscroll = function() {bottompage}*/
