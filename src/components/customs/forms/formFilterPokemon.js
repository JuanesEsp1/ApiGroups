import { Lilita_One } from 'next/font/google'
import BtnHome from '../btns/BtnHome'
import BtnSearchFilter from '../btns/BtnSearchFilter'
import usePokemonManager from '@/hooks/usePokemonManager.js'
import usePaginationDate from '@/hooks/usePaginatioDate.js'
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext.js'
import { FaSearch } from "react-icons/fa";

const lilita = Lilita_One({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
 })

const formFilterPokemon = ({getFilterId, getFilterName, getFilterWeakness, getFilterType, showAll}) =>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const onSubmitName = (data) => {
        getFilterName(data.pokemonName) 
    }

    const onSubmitId = (data) =>{
        getFilterId(data.pokemonId)
    }

    const onSubmitWeakness = (data) =>{
        getFilterWeakness(data.pokemonWeakness)
    }

    const onSubmitType = (data) =>{
        getFilterType(data.pokemonType)
    }

    const onSubmitReset = () =>{
        showAll()
    }

    let typeList =[
        "Fire",
        "Water",
        "Ice",
        "Rock",
        "Fighting",
        "Ground",
        "Normal",
        "Dark",
        "Bug",
        "Poison",
        "Psychic",
        "Steel",
        "Dragon",
        "Electric",
        "Fairy",
        "Ghost",
        "Flying"
    ]
    return(
            <div className="w-full h-full flex flex-col relative ">
                <div className="w-full">
                    <div className={`${lilita.className} text-[30px] flex justify-center items-center pt-4`}>
                        FILTER YOUR POKEMON 
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center py-16 gap-9">
                    <form onSubmit={handleSubmit(onSubmitName)} className="w-full flex flex-row justify-center items-center pl-4">
                        <input
                            {...register("pokemonName", { required: false })}
                            placeholder="Pokemon name"
                            className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3"
                        />
                        <button  type="submit" className="w-[50px] h-[40px] flex justify-center items-center">
                            <FaSearch className="h-[40px] w-[20px] text-slate-500 hover:text-slate-950"/>
                        </button>
                    </form>
                    <form onSubmit={handleSubmit(onSubmitId)} className="w-full flex flex-row justify-center items-center pl-4">
                        <input
                            {...register("pokemonId", { required: false, maxLength: 4 })}
                            placeholder="Pokemon id"
                            className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3"
                        />
                        <button  type="submit" className="w-[50px] h-[40px] flex justify-center items-center">
                            <FaSearch className="h-[40px] w-[20px] text-slate-500 hover:text-slate-950"/>
                        </button>
                    </form>
                    <form onSubmit={handleSubmit(onSubmitWeakness)} className="w-full flex flex-row justify-center items-center pl-4">
                        <input
                            {...register("pokemonWeakness", { required: false })}
                            placeholder="Pokemon weakness"
                            className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3"
                        />
                        <button  type="submit" className="w-[50px] h-[40px] flex justify-center items-center">
                            <FaSearch className="h-[40px] w-[20px] text-slate-500 hover:text-slate-950"/>
                        </button>
                    </form>  
                    <form onSubmit={handleSubmit(onSubmitType)} className="w-full flex flex-row justify-center items-center pl-4">
                        <input
                            {...register("pokemonType", { required: false })}
                            placeholder="Pokemon type"
                            className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3"
                        />
                        <button  type="submit" className="w-[50px] h-[40px] flex justify-center items-center">
                            <FaSearch className="h-[40px] w-[20px] text-slate-500 hover:text-slate-950"/>
                        </button>
                    </form>  
                    <form onSubmit={handleSubmit(onSubmitReset)}>
                        <button type="submit" className="w-[330px] h-[40px] border-[3px] rounded hover:border-slate-950">Reset all</button>
                    </form>
                </div>
                <div className="w-full h-16 absolute bottom-0 left-0 flex justify-center items-center">
                    <div className='w-[300px] flex justify-center items-center text-[30px]'>
                        <BtnHome />
                    </div>
                </div>
            </div>
    );
}

export default formFilterPokemon

/*
                    <div>
                        <input className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3" placeholder='Pokemon name'/>
                    </div>
                    <div>
                        <input className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3" placeholder='Pokemon id'/>
                    </div>
                    <div>
                        <input className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3" placeholder='Pokemon weakness'/>
                    </div>

*/