import { SimplePokemon } from "../interfaces/simple-pokemon"

interface Props { 
    pokemons: SimplePokemon[]
}

const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className='flex flex-wrap  gap-10 items-center justify-center'>
    {
    pokemons.map(pokemon => (
    //    <Image 
    //    key={pokemon.id}
    //       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
    //       width={100}
    //       height={100}
    //       alt={pokemon.name}
    //       />)
    <span key={pokemon.id}>asdasdasd</span>
    
    ))
    }
    
    
    
    
       
        </div>
  )
}

export default PokemonGrid
