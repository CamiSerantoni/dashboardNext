import { PokemonsResponse } from '@/app/pokemons';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';
import Image from 'next/image';

const getPokemons = async (limit= 20, offset= 0) :Promise <SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data:PokemonsResponse = await response.json();
 
 const pokemons = data.results.map(pokemon => ({
  id: pokemon.url.split('/').at(-2)!,
  name: pokemon.name,
 }))
  return pokemons;
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  console.log(pokemons);

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2 '>Listado de Pokémons <small>estático</small>  </span>

    </div>
  );
}