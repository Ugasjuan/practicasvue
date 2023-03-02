import pokemonApi from "@/api/pomonApi";

const getPokemons = () => {
    //array de 650 por que es el total de pokemons que hay
    const pokemonArray = Array.from(Array(650))
        //map sirve para barrer los arreglos y transformarlos
    return pokemonArray.map((_, index) => index + 1);
}

const getPokemonOption = async() => {
    const mixedpokemon = getPokemons().sort(() => Math.random() - 0.5)
        //console.log(getPokemons);

    const pokemons = await getPokemonName(mixedpokemon.splice(0, 4))

    return pokemons
}

const getPokemonName = async([a, b, c, d] = []) => {

    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [p1, p2, p3, p4] = await Promise.all(promiseArr)

    return [
        { name: p1.data.name, id: a },
        { name: p2.data.name, id: b },
        { name: p3.data.name, id: c },
        { name: p4.data.name, id: d }
    ]

}

export default getPokemonOption