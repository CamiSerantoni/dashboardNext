
import { SimplePokemon } from '@/src/pokemons';
import { PokemonGrid, PokemonsResponse } from '@/src/pokemons';


export const metadata = {
 title: '151 Pokemons',
 description: 'Pagina de listado de pokemons',
};




const getPokemons = async (limit= 20, offset= 0) :Promise <SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data:PokemonsResponse = await response.json();
 
 const pokemons = data.results.map(pokemon => ({
  id: pokemon.url.split('/').at(-2)!,
  name: pokemon.name,
 }))


 //throw new Error('Error al obtener los pokemons');
  return pokemons;
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  console.log(pokemons);

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2 '>Listado de Pokémons <small className='text-blue-500'>estático</small>  </span>
<PokemonGrid pokemons={pokemons}/>
    </div>
  );
}