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

/*window.onscroll = funsction() {bottompage}*/
