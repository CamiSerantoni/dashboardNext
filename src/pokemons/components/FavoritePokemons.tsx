'use client'

import { useEffect, useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/src/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {



const favoritePokemons = useAppSelector( state => Object.values(state.pokemons.favorites))
// const [pokemons, setPokemons] = useState( favoritePokemons)
// console.log(Object.values(favoritePokemons), 'FAVORRITES')
 
// useEffect(() => {
//   setPokemons( favoritePokemons)
// }, [favoritePokemons])



return (
   
    <div>
      {
        favoritePokemons.length === 0 ? (<NoFavorites/>) : (<PokemonGrid pokemons={favoritePokemons}/>)

      }
      
    </div>
  )
}

export  const NoFavorites =() => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500'  />
      <span> No hay favoritos </span>
    </div>
  )
}
