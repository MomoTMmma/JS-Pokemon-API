let formSubmit = (event) => {
    // a page refresh is NOT what we want here so. . . 
    event.preventDefault();
    console.log(event);
    let fname = event.target[0].value;
    let lname = event.target[1].value
    console.log('form data:', fname, lname)

    form.reset();
    let new_html = document.createElement('h3');
    new_html.innerHTML = fname + " " + lname;
    new_html.className = 'color-change1';
    form.after(new_html);
}

let form = document.getElementById('nameForm');
console.log(form);
form.addEventListener('submit', formSubmit)

const searchButton = document.getElementById('submit-button');
const searchInput = document.getElementById('search-input');
const pokemonData = document.getElementById('pokemon-data');

const getPokemonData = async (name) => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(pokemonUrl);
    const data = await response.json();
    const abilities = data.abilities.map(ability => ability.ability.name);
    const baseExperience = data.base_experience;
    const spriteUrl = data.sprites.front_shiny;
    const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
    const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;

    // Create a div element to display the Pokemon data
    const pokemonDiv = document.createElement('div');
    const pokemonData = document.getElementById('pokemon-data')
    pokemonDiv.innerHTML = `
     <div>
    <h2>${name}</h2>
    <p>Abilities: ${abilities.join(', ')}</p>
    <p>Base experience: ${baseExperience}</p>
    <img src="${spriteUrl}" alt="${name}">
    <p>Attack base stat: ${attack}</p>
    <p>HP base stat: ${hp}</p>
    <p>Defense base stat: ${defense}</p>
    </div>
`;
    pokemonData.innerHTML = ``;
    pokemonData.appendChild(pokemonDiv);
};

searchButton.addEventListener('click', () => {
    const pokemonName = searchInput.value.toLowerCase();
    getPokemonData(pokemonName);
});