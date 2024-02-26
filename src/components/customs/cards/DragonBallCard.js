import Image from 'next/image'
import DragonBallFondo from '../../../../public/img/fondosCartas/DragonBallFondo.png'
import android from "../../../../public/img/fondosCartas/dragonBall/android.jpg"
import freezer from "../../../../public/img/fondosCartas/dragonBall/freezer.jpg"
import god from "../../../../public/img/fondosCartas/dragonBall/god.jpg"
import human from "../../../../public/img/fondosCartas/dragonBall/human.jpg"
import namek from "../../../../public/img/fondosCartas/dragonBall/namek.jpg"
import nucleico_benigno from "../../../../public/img/fondosCartas/dragonBall/nucleico_benigno.png"
import saiyan from "../../../../public/img/fondosCartas/dragonBall/saiyan.jpg"
import jiren from "../../../../public/img/fondosCartas/dragonBall/jiren.jpg"
import unknown from "../../../../public/img/fondosCartas/dragonBall/unknown.jpg"
import evil from "../../../../public/img/fondosCartas/dragonBall/evil.jpg"
import majin from "../../../../public/img/fondosCartas/dragonBall/Majin.jpg"
import { Fullscreen } from 'lucide-react'

const DragonBallCard = ({ data }) => {

   let backgrounTotal;
   let colorCard;

   switch (data.race) {
      case "Majin":
         backgrounTotal = majin;
         colorCard = "bg-[rgb(247,59,59)]"
         break;
      case "Evil":
         backgrounTotal = evil;
         colorCard = "bg-[rgb(247,59,59)]"
         break;
      case "Unknown":
         backgrounTotal = unknown;
         colorCard = "bg-[rgb(247,59,59)]"
         break;
      case "Jiren Race":
         backgrounTotal = jiren;
         colorCard = "bg-[rgb(247,59,59)]"
         break;
      case "Majin":
         colorCard = "bg-[rgb(241,127,182)]"
         break;
      case "Android":
         backgrounTotal = android;
         colorCard = "bg-[rgb(247,59,59)]"
         break;
      case "Frieza Race":
         backgrounTotal = freezer;
         colorCard = "bg-[rgb(158,125,183)]"
         break;
      case "God":
         backgrounTotal = god;
         colorCard = "bg-[rgb(124,170,203)]"
         break;
      case "Human":
         backgrounTotal = human;
         colorCard = "bg-[rgb(236,144,104)]"
         break;
      case "Namekian":
         backgrounTotal = namek;
         colorCard = "bg-[rgb(125,183,128)]"
         break;
      case "Nucleico benigno":
         backgrounTotal = nucleico_benigno;
         colorCard = "bg-[rgb(241,127,182)]"
         break;
      case "Saiyan":
         backgrounTotal = saiyan;
         colorCard = "bg-[rgb(236,204,104)]";
         break;
      case "Angel":
         backgrounTotal = god;
         colorCard = "bg-[rgb(124,170,203)]"
         break;
   
      default:

         break;
   }

   return (
      <>
         <div className="w-full  max-w-[340px] h-[460px]  flex justify-center">
            <div className="w-full h-full  rounded-3xl">
               <div className="w-full h-72  rounded-t-3xl flex relative ">
                  <Image className='w-full rounded-t-3xl'

                     height={100}
                     src={backgrounTotal}
                     alt=""
                  />
                  <div className='w-full absolute bottom-2 p-5 flex justify-center items-center'>
                     <Image className='flex max-h-64 min-h-56 min-w-28'
                        height={0}
                        width={100}
                        
                        src={data.image}
                        alt=""
                     />
                  </div>
               </div>
               <div className={`w-full h-[calc(100%-288px)] p-4 flex justify-center items-center rounded-b-3xl ${colorCard}`}>
                  <div className="w-full h-full relative flex flex-col items-center justify-center  rounded-2xl bg-slate-200">
                     <div className="h-8 font-semibold text-2xl justify-center items-center flex">
                        {data.name}
                     </div>
                  
                     <div className="w-full grid grid-cols-2  font-bold">
                        <div className='flex flex-col justify-center items-center ' >
                           <div className="text-base p-[2px]">Race:</div>
                           <div className="text-sm p-[2px]">{data.race}</div>
                           <div className="text-base p-[2px]">Base KI:</div>
                           <div className="p-[2px] text-sm">{data.ki}</div>
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                           <div className="text-base p-[2px]">Afilliation:</div>
                           <div className="text-sm p-[2px]">{data.affiliation}</div>
                           <div className="text-base p-[2px]">Total KI:</div>
                           <div className="text-sm p-[2px]">{data.maxKi}</div>
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
