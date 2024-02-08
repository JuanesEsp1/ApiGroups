import HeaderPage from "@/components/layout/HeaderPage.js";
import ApiCard from "@/components/customs/cards/ApiCard";
import imgPokemon from "../../public/img/pokemon.png"
import imgDragonBall from "../../public/img/dragonball.png" 
import imgRickAndMorty from "../../public/img/rickandmorty.png"
import imgHeroes from "../../public/img/heros.png"

export default function Home() {

	let pokemon = {
		colorBack: 'bg-red-400',
		img: imgPokemon,
        border: 'border-red-800',
        boton: 'btnRed',
		pag: 'pokemon',
		name: 'Pokemon'
	}

	let dragonBall = {
		colorBack: 'bg-orange-400',
		img: imgDragonBall,
        border: 'border-orange-800',
        boton: 'btnOrange',
		pag: 'dragonBall',
		name: 'Dragon Ball'
	}

	let rickAndMorty = {
		colorBack: 'bg-emerald-400',
		img: imgRickAndMorty,
        border: 'border-emerald-800',
        boton: 'btnEmerald',
		pag: 'rickandmorty',
		name: 'Rick & Morty'
	}

	let heroes = {
		colorBack: 'bg-blue-400',
		img: imgHeroes,
        border: 'border-blue-800',
        boton: 'btnBlue',
		pag: 'heroes',
		name: 'Heroes'
	}

  	return (
    	<>
			<header>
				<HeaderPage/>
			</header>
			<main>
				<div className="w-full h-full flex justify-center items-center py-5 ">
					<div className=" grid grid-cols-1  md:grid-cols-2 gap-5 ">
						<ApiCard data={pokemon} />
						<ApiCard data={dragonBall} />
						<ApiCard data={heroes} />
						<ApiCard data={rickAndMorty} />
					</div>
				</div>
			</main>	 
    	</>
  	);
}
