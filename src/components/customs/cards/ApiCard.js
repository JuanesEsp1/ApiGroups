import Image from 'next/image'
import BtnCardApi from '../btns/BtnCardApi.js'
const ApiCard = ({data}) => {
   

   return (
      <div
         className={`min-w-[300px] md:max-w-[360px] xl:max-w-[420px] rounded-2xl  ${data.colorBack} border-[2px] ${data.border} sombra`}
      >
         <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center p-4">
               <div className="w-full flex justify-center items-center rounded-2xl bg-slate-800 bg-opacity-20">
                  <Image src={data.img} width={230} alt="Picture of the author" />
               </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col md:justify-center md:items-center p-5 md:p-2 pt-2">
               <div className="w-full flex justify-center items-center font-bold text-3xl md:text-2xl text-white ">
                  {data.name}
               </div>
               <div className="w-full flex justify-center items-center mt-5 ">
                  <BtnCardApi page={data.pag} color={data.boton} />
               </div>
            </div>
         </div>
      </div>
   )
}
export default ApiCard

/*import BtnCardApi from '../buttons/BtnCardApi.js'

<div className={`mb-3 md:mb-2 w-full max-w-[260px] md:max-w-[180px] rounded-2xl ${colorBack} flex flex-col items-center border-[2px] ${border} sombra`}>
            <div className={`w-full max-w-[220px] h-52 md:max-w-[150px] md:h-36 mt-3 rounded-t-2xl bg-white flex `}>
            <Image 
                  src={img}
                  width={230}         
                  alt="Picture of the author"
               />
            </div>
            <div className=" w-full max-w-[230px] mb-1 md:mb-0 text-white justify-center font-medium md:text-2xl flex text-3xl mt-[2px] ">
               {name}
            </div>
            <div className="w-full h-12 md:h-10 flex justify-center items-center">
               <BtnCardApi page="/pokemon"/>
            </div>
         </div>
*/
