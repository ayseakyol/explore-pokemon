import { PokemonApi } from "./pokemon.js";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // stop the form submitting and reloading the page
  event.preventDefault();

  // get the value of the field with id="pokemon"
  const formData = new FormData(event.target);
  const id = formData.get("pokemonId");

  const pokemon = new PokemonApi(id);

  pokemon.doFetch();
});
