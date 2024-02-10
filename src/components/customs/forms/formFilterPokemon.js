import { Lilita_One } from 'next/font/google'
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
        <div className="w-full flex flex-col">
            <div className="w-full">
                <div className={`${lilita.className} text-[30px]`}>
                    FILTER YOUR POKEMON 
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center py-16 gap-8">
                <div>
                    <input className="w-[300px] h-[40px] bg-slate-300 rounded-md justify-center items-center" placeholder='Pokemon name'/>
                </div>
                <div>
                    <input className="w-[300px] h-[40px] bg-slate-300 rounded-md justify-center items-center" placeholder='Pokemon id'/>
                </div>
                <div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                       
                    </SelectContent>
                </Select>
                </div>
            </div>
        </div>
    );
}

export default formFilterPokemon