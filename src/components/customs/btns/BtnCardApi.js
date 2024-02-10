import Link from 'next/link'
const BtnCardApi = ({ page, color }) => {
   return (
      <Link
         href={page}
         className={`btn ${color} bg-white  w-[130px] h-[35px] md:w-[100px] md:h-[25px] md:text-[9px] font-semibold rounded-full mb-2 md:mb-1 text-xs `}
      >
         Ver mas
      </Link>
   )
}

export default BtnCardApi
