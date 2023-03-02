<template>
  <div>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      <h1>¿Quien es este pokemon?</h1>
      <pokemonPinture :pokemonId="pokemon.id" :showpokemon="showpokemon"/>
      <pokemonOptions :pokemons ='pokemonArr' @selection="check"/>
      
      <template v-if="showAnswer" class="fade-in">
        <h2>{{ message }}</h2>
        <button @click="newGame">
          Jugar de nuevo
        </button>
      </template>
      
    </div>
  </div>
</template>

<script>

import pokemonOptions from "@/components/pokemonOptions.vue"
import pokemonPinture from "@/components/pokemonPinture.vue"
import getPokemonOption from "@/helpers/getPokemonOptions.js"
import pokemon from '@/pages/pokemon.vue';

//console.log(getPokemonOption());

export default {
    components:{
        pokemonOptions,
        pokemonPinture
    },
    data(){
      return {
        pokemonArr: [],
        pokemon: null,
        showpokemon: false,
        showAnswer: false,
        message: ''
      }
    },
    methods: {
      async mixpokemonArray() {
        
        this.pokemonArr = await getPokemonOption()
        const rndInd = Math.floor( Math.random() * 4 )
        this.pokemon = this.pokemonArr[rndInd]

      },
      check(pokemonId){
        this.showpokemon = true
        this.showAnswer = true

        if(pokemonId === this.pokemon.id){
          this.message = `Correcto, el pokemon es: ${this.pokemon.name} `
        }else{
          
          this.message = `Oops!! el pokemon era: ${this.pokemon.name} `
        }
      },
      newGame(){
        this.showpokemon = false
        this.showAnswer = false
        this.pokemon = null
        this.pokemonArr = []
        this.mixpokemonArray()
      }
    },
    mounted(){
      this.mixpokemonArray()
    }
}
</script>

<style scoped>
  button{
    margin-bottom: 10px;
  }
</style>