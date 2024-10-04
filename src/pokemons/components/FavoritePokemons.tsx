'use client'

import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/src/store'

export const FavoritePokemons = () => {

const favoritePokemons = useAppSelector( state => Object.values(state.pokemons))

// console.log(Object.values(favoritePokemons), 'FAVORRITES')
  return (
   
    <div>
      <PokemonGrid pokemons={favoritePokemons}/>
    </div>
  )
}


