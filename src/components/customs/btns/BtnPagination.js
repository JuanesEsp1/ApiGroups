'use client'
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from '@/components/ui/pagination'

const BtnPagination = ({ page, totalList, perPage, pagination }) => {
   return (
      <>
         <Pagination>
            <PaginationContent>
               <PaginationItem>
                  <button
                     disabled={page === 1}
                     onClick={() => pagination(page - 1)}
                     className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
                  >
                     Anterior
                  </button>
               </PaginationItem>
               <PaginationItem>
                  <button
                     onClick={() => pagination(page)}
                     className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
                  >
                     {page}
                  </button>
               </PaginationItem>
               <PaginationItem>
                  <button
                     onClick={() => pagination(page + 1)}
                     className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
                  >
                     {page + 1}
                  </button>
               </PaginationItem>
               <PaginationItem>
                  <button
                     onClick={() => pagination(page + 2)}
                     className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
                  >
                     {page + 2}
                  </button>
               </PaginationItem>

               <PaginationItem>
                  <button
                     disabled={page === Math.ceil(totalList / perPage)}
                     onClick={() => pagination(page + 1)}
                     className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
                  >
                     Siguiente
                  </button>
               </PaginationItem>
            </PaginationContent>
         </Pagination>
      </>
   )
}

export default BtnPagination

/*
<div className="flex flex-row justify-between w-[400px] h-[60px] ">
                <button
                    disabled={page === 1}
                    onClick={() => pagination(page - 1)}
                    className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
                >
                    Anterior
                </button>
                
         </div>
*/
