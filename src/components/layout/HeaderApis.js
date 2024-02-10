import Image from 'next/image'
import { IoMenu } from 'react-icons/io5'
import { IoIosSearch } from 'react-icons/io'
import { Lilita_One } from 'next/font/google'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet'

const lilita = Lilita_One({
   subsets: ['latin'],
   weight: '400',
   display: 'swap',
})

const HeaderApis = ({ data }) => {
   return (
      <div className={`w-full h-20 ${data.colorBack}`}>
         <div className="w-full h-full flex justify-between items-center">
            <div className="flex px-6 ">
               <Image
                  className="w-[65px] "
                  src={data.img}
                  alt="Picture of the author"
               />
               <div
                  className={`px-5 ${lilita.className} text-slate-50 font-semibold hidden sm:block lg:flex lg:items-center text-5xl`}
               >
                  {data.headerName}
               </div>
            </div>
            <div className=" px-6">
               <Sheet>
                  <SheetTrigger>
                     <IoMenu className=" text-5xl text-white " />
                  </SheetTrigger>
                  <SheetContent>crear componente del menu aqui</SheetContent>
               </Sheet>
            </div>
            <div className="hidden">
               <div className=" h-12 relative items-center flex px-6">
                  <input className=" border-2 border-slate-800 text-lg text-slate-800  w-72 px-3 h-9 rounded-3xl outline-none" />
                  <div className="absolute right-7 top-0 h-12 w-10   flex justify-center items-center">
                     <IoIosSearch className="text-slate-800 text-3xl cursor-pointer" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderApis
