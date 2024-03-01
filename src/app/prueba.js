import useTypePokemons from '@/hooks/useTypePokemon'
import Image from 'next/image'
import fondoPokemon from '../../../../public/img/fondosCartas/fondoPokemon.svg'

const Card = ({ data }) => {
   const typeStyle = useTypePokemons(data.type[0])

   return (
      <div className="w-full flex flex-col">
         <div className="relative flex flex-col w-full min-w-[300px] max-w-[360px] h-[200px] fondoPokemon rounded-t-[20px]">
            <div className="flex justify-between w-full absolute px-2 py-3 top-0 ">
               <div
                  className={`uppercase flex justify-center items-center w-20 ${typeStyle.background} font-semibold text-slate-100 text-[14px] rounded-full`}
               >
                  {data.type[0]}
               </div>
            </div>
            <div
               className={`flex justify-center items-center min-w[300px] max-w-[360px] h-[200px] ${typeStyle.background} bg-opacity-[0.3] rounded-t-[20px]`}
            >
               <div className="w-40">
                  <Image
                     width={160}
                     height={100}
                     src={data.ThumbnailImage}
                     alt=""
                  />
               </div>
            </div>
         </div>
         <div className="relative w-full">
            <div
               className={`flex justify-center items-center absolute left-9 top-[-20px]  w-56  h-10 rounded-full ${typeStyle.background} ${typeStyle.text} `}
            >
               <div
                  className={` absolute bg-slate-200 w-8 h-8 rounded-full left-1 flex justify-center items-center text-[12px] font-semibold b`}
               >
                  {data.number}
               </div>
               <div className="uppercase text-xl font-bold text-slate-200">
                  {data.name}
               </div>
            </div>
         </div>
         <div
            className={`w-full flex justify-center items-center ${typeStyle.background2} pt-9 pb-5 rounded-b-[20px]`}
         >
            <div
               className={`flex justify-center items-center border-[3px] rounded-3xl ${typeStyle.border} `}
            >
               <div className="flex justify-between items-center gap-10 font-bold py-5 px-3 ">
                  <div
                     className={`uppercase flex flex-col gap-y-1 items-center ${typeStyle.text} `}
                  >
                     <div>weakness</div>
                     <div>abilities</div>
                     <div>weight</div>
                     <div>height</div>
                  </div>
                  <div className="flex flex-col gap-y-1 items-center text-slate-500">
                     <div>{data.weakness[0]}</div>
                     <div>{data.abilities[0]}</div>
                     <div>{data.weight}</div>
                     <div>{data.height}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card
