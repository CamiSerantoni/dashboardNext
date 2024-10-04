import { SimplePokemon } from '@/src/pokemons';
import { PokemonGrid, PokemonsResponse, FavoritePokemons } from '@/src/pokemons';
import { IoHeadsetOutline, IoHeartOutline } from 'react-icons/io5';


export const metadata = {
  title: 'Favoritos',
  description: 'Pagina de favoritos de pokemones',
};



export default async function PokemonsPage() {



  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2 '>Pokémons favoritos <small className='text-blue-500'>Global State</small>  </span>
      {/* <FavoritePokemons /> */}
      <NoFavorites/>
    </div>
  );
}

export  const NoFavorites =() => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500'  />
      <span> No hay favoritos </span>
    </div>
  )
}