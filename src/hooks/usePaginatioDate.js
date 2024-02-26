import { useState } from 'react'

const usePaginationDate = () => {
   const [arrayData, setArrayData] = useState([])
   const [page, setPage] = useState(1)
   const [perPage, setPerPage] = useState(20)

   const last = page * perPage
   const first = last - perPage
   const listData = arrayData.slice(first, last)

   const pagination = (page) => setPage(page)
   const totalList = arrayData.length

   return [
      listData,
      setArrayData,
      pagination,
      page,
      totalList,
      perPage,
      setPage,
   ]
}

export default usePaginationDate
