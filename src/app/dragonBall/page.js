'use client'
import dragon from "../../../public/img/logosHeaders/dragon.svg"
import HeaderApi from "@/components/layout/HeaderApis.js"
import BtnPagination from '@/components/customs/btns/BtnPagination'
import DragonBallCard from "@/components/customs/cards/DragonBallCard"
import { useEffect } from 'react'



const dragonBall = () => {

    let dragonBall = {
        img: dragon,
        headerName: 'Dragon Ball',
        colorBack: 'bg-orange-400',
    }


   


    return (
        <>
            <HeaderApi data={dragonBall} />
            <main>
                <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-2 ">
                    <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-16 xl:grid-cols-3 2xl:grid-cols-4 gap-y-8">   
                        <DragonBallCard />
                        <DragonBallCard />
                        <DragonBallCard />
                        <DragonBallCard />
                        <DragonBallCard />
                    </div>  
                </div>
            </main>
        </>
    )
}

export default dragonBall