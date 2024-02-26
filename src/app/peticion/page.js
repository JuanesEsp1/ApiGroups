'use client'
import { useEffect, useState } from 'react'

const peticion = () => {
   const [dataPokemon, setDataPokemon] = useState([])
   const [url, setUrl] = useState(
      'https://dragonball-api.com/api/characters?page=2&limit=20',
   )

   useEffect(() => {
      fetch(url)
         .then((response) => response.json())
         .then((data) => setDataPokemon(data))
   }, [url])

   console.log(dataPokemon)
   return null
}

export default peticion
