import { Lilita_One } from 'next/font/google'
import { BsFillHouseDoorFill } from "react-icons/bs";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import pokemon from '@/app/pokemon/page'

const lilita = Lilita_One({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
 })

const formFilterPokemon = () =>{

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

    typeList.forEach((type)=>{
        console.log(type)
    })

    return(
            <div className="w-full h-full flex flex-col relative ">
                <div className="w-full">
                    <div className={`${lilita.className} text-[30px] flex justify-center items-center pt-4`}>
                        FILTER YOUR POKEMON 
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center py-16 gap-12">
                    <div>
                        <input className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3" placeholder='Pokemon name'/>
                    </div>
                    <div>
                        <input className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3" placeholder='Pokemon id'/>
                    </div>
                    <div>
                        <input className="w-[300px] h-[40px] border-[3px] rounded justify-center items-center pl-3" placeholder='Pokemon weakness'/>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[300px] h-[40px] rounded">
                                <SelectValue placeholder="Pokemon type" />
                            </SelectTrigger>
                            <SelectContent>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <button className="w-[300px] h-[40px] border-[3px] rounded">Search</button>
                    </div>
                </div>
                <div className="w-full h-16 absolute bottom-0 left-0 flex justify-center items-center">
                    <div className='w-[300px] flex justify-center items-center text-[30px]'>
                        <button className='flex justify-center items-center gap-2'>
                            Go to home
                            <BsFillHouseDoorFill className='w-[30px]'/>
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default formFilterPokemon