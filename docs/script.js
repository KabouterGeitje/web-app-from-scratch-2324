/*avatar hover */

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

async function FetchDataName() {
  const response = await fetch("./info.json");
  const data = await response.json();

  // naam.innerHTML = data.firstName + " " + data.lastName;
  naam.innerHTML = `${data.firstName} ${data.lastName}`
}

FetchDataName();

/*kattenplaatjes API*/ 

async function getCat() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search")
  const data = await response.json();
  console.log(data);

  randomCat.src = data[0].url
}

getCat();

/*zodat ik weet hoe ver mijn pagina is met scrollen */

const plaatje1 = document.querySelector("ul li img:nth-of-type(1)")
const plaatje2 = document.querySelector("ul li img:nth-of-type(2)")
const plaatje3 = document.querySelector("ul li img:nth-of-type(3)")
const plaatje4 = document.querySelector("ul li img:nth-of-type(4)")
var plaatjeIsClicked = false;

function clickPlaatje() {
  if (plaatjeIsClicked = false){
    plaatjeIsClicked = true;
  }

}

plaatje1.addEventListener("click", clickPlaatje)

/*window.onscroll = function() {bottompage}*/
