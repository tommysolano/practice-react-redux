import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion } from '../redux/pokeDucks'

const Pokemones = () => {

    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.array)  

    return (
        <div>
            Lista de pokemones
            <button onClick={ () => dispatch(obtenerPokemonesAccion()) }>Obtener pokemones</button>
            <button onClick={ () => dispatch(siguientePokemonAccion(10))}>Siguiente</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
