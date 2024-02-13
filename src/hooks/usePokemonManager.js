'use client'
import {  useEffect, useState } from 'react'
import DataGeneralPokemons from '../db/pokemon.json'
import { list } from 'postcss';


const apiPokemonManager = () => {

   const [pokemonsData, setPokemonsData] = useState(DataGeneralPokemons);
   const [listPokemons, setListPokemons] = useState([])
   const [pokemonFilterByName, setPokemonFilterByName] = useState([])

   const filterName = (name) => {

      let filteredPokemon = pokemonsData.filter((pokemon) => {
         return pokemon.name.toLowerCase() === name.toLowerCase();
      })
      setListPokemons(filteredPokemon)
   }

   const filterId = (id) => {
      let filteredPokemon = pokemonsData.filter((pokemon) => {
         return pokemon.id.toString() === id.toString()
      })
      setListPokemons(filteredPokemon)
   }

   const filterWeakness = (weakness) => {
      let filteredPokemon = pokemonsData.filter((pokemon) => {
         return pokemon.weakness[0].toLowerCase() === weakness.toLowerCase()
      })
      setListPokemons(filteredPokemon)
   } 

/*
   const [page, setPage] = useState(1)
   const [perPage, setPerPage] = useState(20);
   const [listPokemon,setListPokemon] = useState([]);
   const [totalList,setTotalList] = useState();
   const [pokemonData, setPokemonData] = useState(PokemonData)
   const lastPokemon = page * perPage;
      const firstPokemon = lastPokemon - perPage;
      const slicePokemon = pokemonData.slice(firstPokemon,lastPokemon);
      setListPokemon(slicePokemon);
      setTotalList(pokemonData.length);
   const pagination = (page) => setPage(page);


   const filterId = (id) =>{
      let filteredPokemon = pokemonData.filter((pokemon) => {
         return pokemon.id.toString() === id.toString()
      })
          
      setPokemonData(filteredPokemon);
      setPage(1);
   }
   const filterName = (name) =>{
      let filteredPokemon = pokemonData.filter((pokemon)=>{
         return pokemon.name.toLowerCase() === name.toLowerCase()
      })
      
      setPokemonData(filteredPokemon);
      setPage(1);
   }



   return [listPokemon, page, pagination, totalList, perPage, filterId, filterName]
   */
   return [listPokemons,filterName,pokemonFilterByName,filterId,filterWeakness]
}

export default apiPokemonManager
