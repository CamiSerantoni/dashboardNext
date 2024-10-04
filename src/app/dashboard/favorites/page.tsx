import { SimplePokemon } from '@/src/pokemons';
import { PokemonGrid, PokemonsResponse, FavoritePokemons } from '@/src/pokemons';


export const metadata = {
 title: 'Favoritos',
 description: 'Pagina de favoritos de pokemones',
};



export default async function PokemonsPage() {

  

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2 '>Pokémons favoritos <small className='text-blue-500'>Global State</small>  </span>
    <FavoritePokemons/>
    </div>
  );
}