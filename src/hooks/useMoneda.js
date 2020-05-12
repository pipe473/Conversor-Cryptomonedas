import React, { Fragment, useState } from 'react';

const useMoneda = () => {

    // State de nuestro custom hook
    const [state, actualizarState] = useState('');


    const Seleccionar = () => (
    <Fragment>
        <label>Moneda</label>
        <select>
            <option value="MXN">Peso Mexicano</option>
        </select>
    </Fragment>
    );
}
 
export default useMoneda;

const [moneda, guardarMoneda] = useState();