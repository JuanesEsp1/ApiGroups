import Image from 'next/image'
import DragonBallFondo from '../../../../public/img/fondosCartas/DragonBallFondo.png'

const DragonBallCard = () => {
   return (
      <>
         <div className="w-full min-w-[320px] max-w-[330px] h-[460px]  flex justify-center">
            <div className="w-full h-full  rounded-3xl">
               <div className="w-full h-72 bg-gray-200 rounded-t-3xl flex "></div>
               <div className="w-full h-[calc(100%-288px)] p-4 flex justify-center items-center rounded-b-3xl bg-slate-800">
                  <div className="w-full h-full relative flex flex-col items-center  rounded-2xl bg-slate-200">
                     <div className="h-8 font-semibold text-2xl justify-center items-center flex">
                        PICCOLO
                     </div>
                     <div className="absolute left-[140px] top-10 h-[75px] w-[3px] bg-gray-700 "></div>
                     <div className="grid grid-cols-2 gap-x-14 font-bold">
                        <div>
                           <div className="h-5">Race:</div>
                           <div className="h-7 text-lg ">NAMEKIAN</div>
                           <div className="h-5">Base KI:</div>
                           <div className="h-8 text-base flex items-center">
                              2.000.000
                           </div>
                        </div>
                        <div>
                           <div className="h-5">Afilliation:</div>
                           <div className="h-7 text-lg ">NAMEKIAN</div>
                           <div className="h-5">Total KI:</div>
                           <div className="h-8 text-base flex items-center">
                              2.000.000
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default DragonBallCard
