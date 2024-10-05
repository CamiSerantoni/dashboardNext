'use client'
import { Provider } from 'react-redux'
import { store } from '.'
import { useEffect } from 'react'
import { setFavoritePokemons } from './pokemons/pokemons'

interface Props {
    children: React.ReactNode
}


const Providers = ({ children }: Props) => {

useEffect(() => {

  const favorites= JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}'); 

    store.dispatch(setFavoritePokemons(favorites))
}, [])


    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>

        </div>
    )
}

export default Providers
