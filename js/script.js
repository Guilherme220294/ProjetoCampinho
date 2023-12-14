//Icone animado
const favicons = ["/title-icon/favicon-16x16.png", "/title-icon/favicon-16x162.png"];
const faviconElement = document.getElementById("favicon");

// Função para alternar favicons
function trocaIcon() {
  const currentFavicon = faviconElement.getAttribute("href");
  const nextFavicon = (currentFavicon === favicons[0]) ? favicons[1] : favicons[0];
  faviconElement.setAttribute("href", nextFavicon);
}
setInterval(trocaIcon, 1000); //tempo em ms


///////////////////// Animação icone /\ /////////

const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');


const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
  const data = await APIResponse.json();
   return data;
}

const renderPokemon = async (pokemon) => {

  const data = await fetchPokemon(pokemon);
  
  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}

input.value = '';

form.addEventListener('submit', (event) => {

  event.preventDefault();

  renderPokemon(input.value);

});

// const fetchPokemon = async (pokemon) => {
//   const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
//   if (!APIResponse.ok) {
//     throw new Error(`Erro na requisição: ${APIResponse.status} ${APIResponse.statusText}`);
//   }
  
//   const data = await APIResponse.json();
//   return data;
//   console.log('25')
// }


// const renderPokemon = (pokemon) => {
//   const data = fetchPokemon(pokemon);
// }

