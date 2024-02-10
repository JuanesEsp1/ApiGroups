const useTypePokemons = (type) => {
   let dataTypePokemon = {
      fire: {
         background: 'bg-red-500',
         text: 'text-red-600',
         border: 'border-red-500',
         background2: 'bg-red-100',
      },
      grass: {
         background: 'bg-lime-500',
         text: 'text-lime-600',
         border: 'border-lime-500',
         background2: 'bg-lime-100',
      },
      water: {
         background: 'bg-blue-500',
         text: 'text-blue-600',
         border: 'border-blue-500',
         background2: 'bg-blue-100',
      },
      poison: {
         background: 'bg-violet-500',
         text: 'text-violet-600',
         border: 'border-violet-500',
         background2: 'bg-violet-100',
      },
      bug: {
         background: 'bg-green-500',
         text: 'text-green-600',
         border: 'border-green-500',
         background2: 'bg-green-100',
      },
      normal: {
         background: 'bg-[rgb(198,153,166)]',
         text: 'text-[rgb(174,91,139)]',
         border: 'border-[rgb(198,153,166)]',
         background2: 'bg-[rgb(249,196,226)]',
      },
      dark: {
         background: 'bg-gray-600',
         text: 'text-gray-600',
         border: 'border-gray-500',
         background2: 'bg-gray-100',
      },
      electric: {
         background: 'bg-yellow-400',
         text: 'text-yellow-600',
         border: 'border-yellow-500',
         background2: 'bg-yellow-100',
      },
      ice: {
         background: 'bg-sky-600',
         text: 'text-sky-600',
         border: 'border-sky-500',
         background2: 'bg-sky-100',
      },
      fairy: {
         background: 'bg-rose-600',
         text: 'text-rose-600',
         border: 'border-rose-500',
         background2: 'bg-rose-100',
      },
      ground: {
         background: 'bg-amber-700',
         text: 'text-amber-600',
         border: 'border-amber-500',
         background2: 'bg-amber-100',
      },
      fighting: {
         background: 'bg-orange-600',
         text: 'text-orange-600',
         border: 'border-orange-500',
         background2: 'bg-orange-100',
      },
      psychic: {
         background: 'bg-pink-600',
         text: 'text-pink-600',
         border: 'border-pink-500',
         background2: 'bg-pink-100',
      },
      rock: {
         background: 'bg-yellow-800',
         text: 'text-yellow-900',
         border: 'border-yellow-800',
         background2: 'bg-yellow-100',
      },
      ghost: {
         background: 'bg-indigo-700',
         text: 'text-indigo-800',
         border: 'border-indigo-700',
         background2: 'bg-indigo-100',
      },
      dragon: {
         background: 'bg-cyan-500',
         text: 'text-cyan-600',
         border: 'border-cyan-500',
         background2: 'bg-cyan-100',
      },
      steel: {
         background: 'bg-teal-500',
         text: 'text-teal-600',
         border: 'border-teal-500',
         background2: 'bg-teal-100',
      },
   }
   return dataTypePokemon[type] || {}
}
export default useTypePokemons
