document.addEventListener("DOMContentLoaded", function () {
    const pokemonListContainer = document.getElementById("pokemon-list");
    const seenPokemonList = document.getElementById("seen-pokemon-list");

    // Simulando os 150 primeiros Pokémon
    const pokemonCount = 150;
    for (let i = 1; i <= pokemonCount; i++) {
        const pokemon = document.createElement("div");
        pokemon.className = "pokemon";
        pokemon.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Pokemon ${i}">
            <br>
            <label>
                <input type="checkbox" class="seen-checkbox" data-id="${i}">
                Vi
            </label>
        `;
        pokemonListContainer.appendChild(pokemon);
    }

    // Adicionando evento de clique aos checkboxes
    const checkboxes = document.querySelectorAll(".seen-checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const pokemonId = this.dataset.id;
            if (this.checked) {
                addSeenPokemon(pokemonId);
            } else {
                removeSeenPokemon(pokemonId);
            }
        });
    });

    // Função para adicionar um Pokémon à lista de vistos
    function addSeenPokemon(pokemonId) {
        const pokemonName = getPokemonName(pokemonId);
        const listItem = document.createElement("li");
        listItem.textContent = pokemonName;
        seenPokemonList.appendChild(listItem);
    }

    // Função para remover um Pokémon da lista de vistos
    function removeSeenPokemon(pokemonId) {
        const listItem = Array.from(seenPokemonList.children).find((li) => {
            return li.textContent.includes(getPokemonName(pokemonId));
        });
        if (listItem) {
            seenPokemonList.removeChild(listItem);
        }
    }

    // Função para obter o nome de um Pokémon com base no ID
    function getPokemonName(pokemonId) {
        // Você pode substituir isso por uma chamada à API Pokémon para obter informações mais detalhadas
        return `Pokemon ${pokemonId}`;
    }

    // Função para marcar um Pokémon como visto pelo nome
    window.markAsSeen = function () {
        const pokemonNameInput = document.getElementById("pokemon-name");
        const pokemonName = pokemonNameInput.value.trim();

        if (pokemonName !== "") {
            // Simulando a marcação de um Pokémon como visto
            const listItem = document.createElement("li");
            listItem.textContent = pokemonName;
            seenPokemonList.appendChild(listItem);
            pokemonNameInput.value = "";
        }
    };
});
