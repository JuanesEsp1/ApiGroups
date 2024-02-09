import useTypePokemons from "@/hooks/useTypePokemon";
import PokemonLogo from "../../../../public/img/fondosCartas/PokemonLogo.webp";
import Image from "next/image";
const PokemonCard = ({data}) =>{

    const typeStyle = useTypePokemons(data.type[0]);
    


    return(
        <div className="w-full flex flex-col">   
            <div className="relative flex flex-col w-full min-w-[300px] max-w-[360px] h-[200px] backImgPokemon rounded-t-[20px]">
                <div className="flex justify-between w-full absolute px-2 py-3 top-0 ">
                    <div>
                        <Image className="w-[70px]" src={PokemonLogo} alt="" />
                    </div>
                    <div className={`uppercase flex justify-center items-center w-20 ${typeStyle.background} font-semibold text-slate-100 text-[14px] rounded-full`}>
                        {data.type[0]}
                    </div>
                </div>

                <div className={`flex justify-center items-center min-w[300px] max-w-[360px] h-[200px] ${typeStyle.background} bg-opacity-[0.4] rounded-t-[20px]`}>
                    <div className="w-40">
                        <Image
                            width={160}
                            height={100}
                            src={data.ThumbnailImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PokemonCard;