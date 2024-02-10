'use client'
import Link from 'next/link'
import { FaCloud, FaUsers } from 'react-icons/fa'
const BtnRoute = ({ data }) => {
   let icon
   switch (data.icon) {
      case 'cloud':
         icon = <FaCloud />
         break
      case 'users':
         icon = <FaUsers />
         break
   }
   return (
      <Link
         href={data.route}
         className={`w-[160px] h-[40px] ${data.renderColor} flex flex-row rounded-full`}
      >
         <div
            className={`w-[40px] h-[40px] rounded-full bg-slate-50 ${data.textColor} flex justify-center items-center text-xl `}
         >
            {icon}
         </div>
         <div className="w-[100px] h-[40px] font-semibold flex justify-center items-center ">
            {data.title}
         </div>
      </Link>
   )
}
export default BtnRoute
