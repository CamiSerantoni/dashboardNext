import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/src/pokemons";
/* usualmente las librerias de terceros van primero y después nuestro código*/

/*
{
'1': {id:1, name: 'bulbasaur'},
'2': {id:2, name: 'ivysaur'},}

*/

interface PokemonsState {
  [key: string]: SimplePokemon;
}
const getInitialState = (): PokemonsState => {
  const favorites= JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}'); 
return favorites
}

const initialState = {
...getInitialState()
};


const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
      
      }else {
         state[id] = pokemon;
      }
      // TODO no se debe hacer en redux
     localStorage.setItem('favorites-pokemons', JSON.stringify(state));
    },
  },
});

export const {toggleFavorite} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
