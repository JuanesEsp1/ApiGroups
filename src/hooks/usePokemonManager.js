'use client'

import { useState } from 'react'
import PokemonData from '../db/pokemon.json'

const apiPokemonManager = () => {

   const [listPokemons, setListPokemons] = useState(PokemonData);

   const filterId = (id) => {
      let filtered = PokemonData.filter((pokemon) => pokemon.id.toString() === id)
      console.log(filtered)
      setListPokemons(filtered)
   }

   const filterName = (name) => {
      let lowercase = name.toLowerCase()
      let filtered = PokemonData.filter((pokemon) => pokemon.name.toLowerCase() === lowercase)
      setListPokemons(filtered)
   }

   const filterWeakness = (weakness) => {
      console.log(weakness)
      let lowercase = weakness.toLowerCase()
      let filtered = PokemonData.filter((pokemon) => 
         pokemon.weakness.some((t) => t.toLowerCase() === lowercase),
      )
      setListPokemons(filtered)
   }

   const filterType = (type) => {
      console.log(type)
      let lowercase = type.toLowerCase()
      let filtered = PokemonData.filter((pokemon) =>
         pokemon.type.some((t) => t.toLowerCase() === lowercase),
      )
      setListPokemons(filtered)
   }

   const showAll = () => {
      setListPokemons(PokemonData)
   }

   return {listPokemons, filterId, filterName, filterType, filterWeakness, showAll}
   
}

export default apiPokemonManager
