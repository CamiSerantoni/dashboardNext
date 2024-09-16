'use client'
import { Provider } from 'react-redux'
import { store } from '.'

interface Props {
    children: React.ReactNode
}


const Providers = ({ children }: Props) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>

        </div>
    )
}

export default Providers
