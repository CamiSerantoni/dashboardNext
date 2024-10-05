import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/src/pokemons";
/* usualmente las librerias de terceros van primero y después nuestro código*/

/*
{
'1': {id:1, name: 'bulbasaur'},
'2': {id:2, name: 'ivysaur'},}

*/

interface PokemonsState {
 favorites:{ [key: string]: SimplePokemon};
}
// const getInitialState = (): PokemonsState => {
 
//   // if (typeof localStorage === 'undefined' ) return {};
 
//   const favorites= JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}'); 
// return favorites
// }

const initialState: PokemonsState = {
  favorites:{},
// ...getInitialState()
};


const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon} >) {
      state.favorites= action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      
      }else {
         state.favorites[id] = pokemon;
      }
      // TODO no se debe hacer en redux
     localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites));
    },
  },
});

export const {toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
