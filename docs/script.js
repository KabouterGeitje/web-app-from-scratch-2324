console.log("hey hoi");

const naam = document.querySelector("h1");

async function FetchData() {
  const response = await fetch("./json/info.json");
  const data = await response.json();

  naam.innerHTML = data.naam;
}

FetchData();

/*window.onscroll = funsction() {bottompage}*/
