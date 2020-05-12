import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Beba Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const useMoneda = (label, stateInicial, opcionesMoneda) => {

    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);


    const Seleccionar = () => (
    <Fragment>
        <label>{label}</label>
        <select
            onChange={e => actualizarState(e.target.value)}
            value={state}
        >
            <option value="">- Seleccione -</option>
            {opcionesMoneda.map(opcion =>(
                <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
            ))}
        </select>
    </Fragment>
    );

    // Retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState];
}
 
export default useMoneda;