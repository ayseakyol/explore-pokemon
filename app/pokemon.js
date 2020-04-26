class PokemonApi {
  constructor(id) {
    this.id = id;
  }

  doFetch() {
    // request that pokemon from PokeAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      // if we get a successful response
      .then((pokemonData) => {
        this.render(pokemonData);
      })
      // if the request is unsuccessful
      .catch((error) => {
        console.log(error);
        if (error.message === "404") {
          output.textContent = `⚠️ Couldn't find "${this.id}"`;
        } else {
          output.textContent = "⚠️ Something went wrong";
        }
      });
  }

  render(pokemonData) {
    const output = document.querySelector("#root");

    const divEl = document.createElement("div");
    divEl.id = "";
    const pEl = document.createElement("p");
    pEl.innerText = `This is ${pokemonData.name}`;
    const image = document.createElement("img");
    image.src = pokemonData.sprites.front_default;
    image.alt = "";

    divEl.appendChild(pEl);
    divEl.appendChild(image);
    output.appendChild(divEl);
  }
}

export { PokemonApi };
