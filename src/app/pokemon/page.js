'use client'
import LogoPokemon from "../../../public/img/logosHeaders/pokeball.svg";
import HeaderApi from "../../components/layout/HeaderApis.js";
import Cards from "../../components/customs/cards/PokemonCard.js";
import apiPokemonManager from "@/hooks/apiPokemonManager";
import BtnPagination from "@/components/customs/btns/BtnPagination";


const pokemon = () => {

    const [listPokemon, page, pagination, totalList, perPage] = apiPokemonManager()

    let Pokemon = {
        img: LogoPokemon,
        headerName: 'Pokemon',
        colorBack: 'bg-red-500',
    }
   
    return ( 
        <>
            <HeaderApi data={Pokemon}/>
            <main>
                <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-5 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 2xl:grid-cols-4 gap-5  ">
                        {listPokemon.map((pokemon,index) =>{
                            return <Cards key={index} data={pokemon}/>
                        })}
                    </div>
                </div>
                <div className="w-full flex justify-normal items-center p-7">
                    <BtnPagination
                        page={page}
                        totalList={totalList}
                        perPage={perPage}
                        pagination={pagination}
                    />
                </div>
            </main>
        </>
    )
}
 
export default pokemon