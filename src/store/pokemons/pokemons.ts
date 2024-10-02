import { SimplePokemon } from '@/src/pokemons';
import { createSlice } from '@reduxjs/toolkit'

/*
{
'1': {id:1, name: 'bulbasaur'},
'2': {id:2, name: 'ivysaur'},}

*/

interface PokemonsState {
    [key: string]: SimplePokemon
}

const initialState = {
'1': {id:'1', name: 'bulbasaur'},
'3': {id:'3', name: 'venusaur'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const { } = pokemonsSlice.actions

export default pokemonsSlice.reducer