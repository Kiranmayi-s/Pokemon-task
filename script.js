let head = document.createElement("div");
head.innerHTML =" POKEMON CARDS ";
head.setAttribute("class","header");

let div = document.createElement("div");
div.setAttribute("id","poke_container");
div.setAttribute("class","poke-container");
document.body.style.backgroundColor = "black";
document.body.style.color ="white";
document.body.append(head,div);

const poke_container = document.getElementById("poke_container");

const fetchPokemons = async () =>{
    for(let i=1;i<=50;i++){
        await getPokemon(i);
    }
}
const getPokemon = async id =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);  
}

fetchPokemons();
function createPokemonCard(pokemon){

    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const ability = pokemon.abilities[0].ability.name[0].toUpperCase() + pokemon.abilities[0].ability.name.slice(1);
    const moves = pokemon.moves[0].move.name[0].toUpperCase() + pokemon.moves[0].move.name.slice(1);

    const pokeInnerHTML =`
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">
    </div>
    <div class="info">
    <h3 class="number"> ${pokemon.id}</h3>
    <h3 class="name"> ${name}</h3>
    <h6 class="ability"> Ability: ${ability}</h6>
    <h6 class="moves"> Moves: ${moves}</h6>
    <h6 class="weight"> Weight: ${pokemon.weight}kg </h6>
    </div>`;

    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}




