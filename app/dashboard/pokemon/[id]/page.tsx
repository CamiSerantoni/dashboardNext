import { Pokemon } from "@/app/pokemons";
import { Metadata, ResolvedMetadata } from "next";


interface Props {
    params: {id: string}
}

export async function generateMetadata({params}:Props,  parent: ResolvedMetadata): Promise<Metadata> {


  const {id, name } = await  getPokemon(params.id)


   
  
    return {
  
      title: `Pokemon ${id} - ${name}`,
  
      description: `Informacion del pokemon ${name}`
  
    } 
  
  }


const getPokemon= async (id: string): Promise<Pokemon> => {   

const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    
//cache: "force-cache"// TODO: cambiar a futuro
next:{
  revalidate: 60 * 60 *30 * 6
}
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
        {JSON.stringify(pokemon.name)}
      </div>
    </div>
  );
}