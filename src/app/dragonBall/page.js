'use client'
import dragon from '../../../public/img/logosHeaders/dragon.svg'
import HeaderApi from '@/components/layout/HeaderApis.js'
import BtnPagination from '@/components/customs/btns/BtnPagination'
import DragonBallCard from '@/components/customs/cards/DragonBallCard'
import { useEffect, useState } from 'react'
import BtnPaginationDragon from '@/components/customs/btns/BtnPaginationDragon.js'

const dragonBall = () => {
   let dragonBall = {
      img: dragon,
      headerName: 'Dragon Ball',
      colorBack: 'bg-orange-400',
   }

   const [page, setPage] = useState({});

  


	const [url, setUrl] = useState(
      'https://dragonball-api.com/api/characters?page='+page+'&limit=20',
   )
   const [personajes, setPersonajes] = useState([])

   const obtenerPersonajes = async () => {
      try {
         const response = await fetch(url)
         if (!response.ok) {
            throw new Error('Error al obtener los personajes')
         }
         const data = await response.json()
         setPersonajes(data.items)
         setPage(data.links)
         
      } catch (error) {
         console.error('Error al obtener los personajes:', error)
      }
   }

   useEffect(() => {
      obtenerPersonajes()
   }, [url])



   return (
      <>
         <HeaderApi data={dragonBall} />
         <main>
            <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-2 ">
               <div className="px-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 xl:grid-cols-3 2xl:grid-cols-4 gap-y-8">
						{		
							personajes.map((dragonBall, index) => {
                     return <DragonBallCard key={index} data={dragonBall} />
                  	})
						}
               </div>
            </div>
            <div className="w-full flex justify-normal items-center p-7">
              <button onClick={()=>setUrl(page.next)} >cambio pagina</button>
            </div>
         </main>
      </>
   )
}

export default dragonBall
