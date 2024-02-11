'use client'
import { useState } from 'react'
import pokemonData from '../db/pokemon.json'

const apiPokemonManager = () => {
   const [page, setPage] = useState(1)
   const [perPage, setPerPage] = useState(20)

   const lastPokemon = page * perPage
   const firstPokemon = lastPokemon - perPage
   const listPokemon = pokemonData.slice(firstPokemon, lastPokemon)

   const pagination = (page) => setPage(page)

   const totalList = pokemonData.length

   const miPrueba = (name,id,weakness) =>{
      console.log(name)
      console.log(id)
      console.log(weakness)
   }

   return [listPokemon, page, pagination, totalList, perPage, miPrueba]
}

export default apiPokemonManager
