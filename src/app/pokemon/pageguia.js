'use client'
import LogoPokemon from '../../../public/img/logosHeaders/pokeball.svg'
import HeaderApi from '../../components/layout/HeaderApis.js'
import Cards from '../../components/customs/cards/PokemonCard.js'
import usePokemonManager from '@/hooks/usePokemonManager.js'
import usePaginationDate from '@/hooks/usePaginatioDate.js'
import BtnPagination from '@/components/customs/btns/BtnPagination'
import { useEffect } from 'react'

const pokemon = () => {
   const { listPokemons, filterId, filterName, filterType, showAll } =
      usePokemonManager()
   const [listData, setArrayData, pagination, page, totalList] =
      usePaginationDate()

   let Pokemon = {
      img: LogoPokemon,
      headerName: 'Pokemon',
      colorBack: 'bg-red-500',
   }

   useEffect(() => {
      console.log(listPokemons)
      setArrayData(listPokemons)
   }, [listPokemons])

   return (
      <>
         <HeaderApi data={Pokemon} />
         <main>
            <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-5 ">
               <div className="grid grid-cols-1 md:grid-cols-1 md:gap-x-10 xl:grid-cols-1 2xl:grid-cols-1 gap-5  ">
                  <div className="w-full grid grid-cols-2 gap-3">
                     <div
                        onClick={() => {
                           console.log('filtrando por id')
                           filterId(1)
                           pagination(1)
                        }}
                        className="w-[100px] h-[30px] flex justify-center items-center bg-sky-300 rounded cursor-pointer  "
                     >
                        Filter id
                     </div>
                     <div
                        onClick={() => {
                           console.log('filtrando por name')
                           filterName('pikachu')
                           pagination(1)
                        }}
                        className="w-[100px] h-[30px] flex justify-center items-center bg-sky-300 rounded cursor-pointer  "
                     >
                        Filter name
                     </div>
                     <div
                        onClick={() => {
                           console.log('filtrando por type')
                           filterType('fire')
                           pagination(1)
                        }}
                        className="w-[100px] h-[30px] flex justify-center items-center bg-sky-300 rounded cursor-pointer  "
                     >
                        Filter type
                     </div>
                     <div
                        onClick={() => {
                           console.log('mostrando todos')
                           showAll()
                           pagination(1)
                        }}
                        className="w-[100px] h-[30px] flex justify-center items-center bg-sky-300 rounded cursor-pointer  "
                     >
                        show all
                     </div>
                     <div
                        onClick={() => {
                           pagination(page - 1)
                        }}
                        className="w-[100px] h-[30px] flex justify-center items-center bg-emerald-300 rounded cursor-pointer mt-5  "
                     >
                        before
                     </div>
                     <div
                        onClick={() => {
                           pagination(page + 1)
                        }}
                        className="w-[100px] h-[30px] flex justify-center items-center bg-emerald-300 rounded cursor-pointer mt-5  "
                     >
                        after
                     </div>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-3">
                     {listData.map((pokemon, index) => {
                        return <Cards key={index} data={pokemon} />
                     })}
                  </div>

                  {/*listPokemons.map((pokemon, index) => {
                     return <Cards key={index} data={pokemon} />
                  })*/}
               </div>
            </div>
            <div className="w-full flex justify-normal items-center p-7">
               {
                  <BtnPagination
                     page={page}
                     totalList={totalList}
                     perPage={perPage}
                     pagination={pagination}
                  />
               }
            </div>
         </main>
      </>
   )
}

export default pokemon

/*
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 2xl:grid-cols-4 gap-5  ">
*/
