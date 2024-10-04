'use client'

import { useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/src/store'

export const FavoritePokemons = () => {



const favoritePokemons = useAppSelector( state => Object.values(state.pokemons))
const [pokemons, setPokemons] = useState( favoritePokemons)
// console.log(Object.values(favoritePokemons), 'FAVORRITES')
  return (
   
    <div>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  )
}


