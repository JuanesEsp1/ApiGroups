'use client'
import { useEffect, useState } from 'react'
import PokemonData from '../db/pokemon.json'


const apiPokemonManager = () => {

   const [page, setPage] = useState(1)
   const [perPage, setPerPage] = useState(20)

   const [listPokemon,setListPokemon] = useState([]);
   const [totalList,setTotalList] = useState();

   const [pokemonData, setPokemonData] = useState(PokemonData)

   
   useEffect(()=>{
      console.log(listPokemon)
      const lastPokemon = page * perPage;
      const firstPokemon = lastPokemon - perPage;
      const slicePokemon = pokemonData.slice(firstPokemon,lastPokemon);
      setListPokemon(slicePokemon);
      setTotalList(pokemonData.length)
      console.log(listPokemon)
   },[pokemonData,page,perPage])
   
   const pagination = (page) => setPage(page)

   const filterId = (id) =>{
      let filteredPokemon = pokemonData.filter((pokemon) => {
         return pokemon.id.toString() === id
      })
      console.log(filteredPokemon)
      setPokemonData(filteredPokemon);
      setPage(1);
   }

   const filterName = (name) =>{
      let filteredPokemon = pokemonData.filter((pokemon)=>{
         return pokemon.name.toLowerCase() === name
      })
      console.log(filteredPokemon);
   }



   return [listPokemon, page, pagination, totalList, perPage, filterId, filterName]
}

export default apiPokemonManager
