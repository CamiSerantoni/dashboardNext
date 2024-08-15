import { Pokemon } from "@/app/pokemons";


interface Props {
    params: {id: string}
}
const getPokemon= async (id: string): Promise<Pokemon> => {   

const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    
cache: "force-cache"// TODO: cambiar a futuro

}).then(res => res.json());

console.log('SE CARGÓ:', pokemon.name)
return pokemon

}


export default async function PokemonPage({params} : Props) {
  
    const pokemon = await  getPokemon(params.id)
//   console.log({props})
  
    return (
    <div>
      <h1>Pokemon {params.id}</h1>
      <div>
        {JSON.stringify(pokemon)}
      </div>
    </div>
  );
}