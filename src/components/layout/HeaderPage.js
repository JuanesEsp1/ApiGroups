import BtnRoute from '../customs/btns/BtnRoute.js'
import { IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import Logo from '../../../public/img/Codelab.png'
import Logo2 from '../../../public/img/Codelab2.png'

const HeaderPage = () => {
   let apis = {
      icon: 'cloud',
      title: 'Apis',
      route: '/',
      renderColor: 'bg-blue-500',
      textColor: 'text-blue-600',
   }

   let developers = {
      icon: 'users',
      title: 'Developers',
      route: 'developers',
      renderColor: 'bg-emerald-500',
      textColor: 'text-emerald-600',
   }

   return (
      <div className="w-full h-full bg-slate-800">
         <div className="w-full h-full flex justify-between items-center text-white">
            <div className="px-[26px]">
               <Image
                  className="hidden sm:block"
                  src={Logo}
                  width={350}
                  height={450}
                  alt="Picture of the author"
               />
               <Image
                  className="sm:hidden"
                  src={Logo2}
                  width={80}
                  height={450}
                  alt="Picture of the author"
               />
            </div>
            <div className="px-[20px] lg:hidden">
               <IoMenu className="text-5xl text-cyan-50  " />
            </div>
            <div className="px-[20px] hidden lg:block ">
               <div className=" flex  flex-row gap-x-6 ">
                  <BtnRoute data={apis} />
                  <BtnRoute data={developers} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderPage

/*
<BtnDirection icon="cloud" title="Apis" dir="/" />
                  <BtnDirection
                     icon="users"
                     title="Developers"
                     dir="developers"
                  />
*/
