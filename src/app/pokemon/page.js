'use client'
import LogoPokemon from '../../../public/img/logosHeaders/pokeball.svg'
import HeaderApi from '../../components/layout/HeaderApis.js'
import Cards from '../../components/customs/cards/PokemonCard.js'
import usePokemonManager from '@/hooks/usePokemonManager'
import BtnPagination from '@/components/customs/btns/BtnPagination'
import { useEffect } from 'react'

const pokemon = () => {
  // const [listPokemon, page, pagination, totalList, perPage, filterId, filterName] = usePokemonManager()

   const [listPokemons, filterName,pokemonFilterByName,filterId,filterWeakness, page, pagination, PokemonsPerPage, totalList] = usePokemonManager()

   useEffect(() => {
      filterWeakness('fuego')
   },[])
   


   
   let Pokemon = {
      img: LogoPokemon,
      headerName: 'Pokemon',
      colorBack: 'bg-red-500',
   }
   
   return (
      <>
         <HeaderApi data={Pokemon} />
         <main>
            <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-5 ">
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 2xl:grid-cols-4 gap-5  ">
                  {listPokemons.map((pokemon, index) => {
                     return <Cards key={index} data={pokemon} />
                  })}
               </div>
            </div>
            <div className="w-full flex justify-normal items-center p-7">
               {
               <BtnPagination
                  page={page}
                  totalList={totalList}
                  perPage={PokemonsPerPage}
                  pagination={pagination}
               />
               }
            </div>
         </main>
      </>
   )
}

export default pokemon
