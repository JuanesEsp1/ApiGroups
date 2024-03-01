'use client'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
const BtnPagination = ({ page, totalList, perPage, pagination }) =>{
    const totalPages = Math.ceil(totalList / perPage);
    return(
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem >
                        <button
                            disabled={page === 1}
                            onClick={() => pagination(page - 1)}
                            className="w-[40px] h-[30px] hover:bg-slate-500 mr-2 hover:text-slate-100 flex justify-center items-center rounded-xl bg-slate-300 text-slate-900"
                            >
                                <BsChevronLeft />
                        </button>
                    </PaginationItem>
                    
                    {[...Array(Math.min(totalPages, 3))].map((_, index) => (
                        <PaginationItem key={index}>
                            <button
                                onClick={() => pagination(page + index)}
                                className="w-[45px] h-[30px] hover:bg-slate-500 hover:font-semibold hover:text-slate-100 flex justify-center items-center rounded-xl bg-slate-300 text-slate-900"
                                disabled={page + index > totalPages}
                            >
                                {page + index}
                            </button>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <button
                            disabled={page === Math.ceil(totalList / perPage)}
                            onClick={() => pagination(page + 1)}
                            className="w-[40px] h-[30px] hover:bg-slate-500 ml-2 hover:font-semibold hover:text-slate-100 flex justify-center items-center rounded-xl bg-slate-300 text-slate-900"
                        >
                            <BsChevronRight />
                        </button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
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