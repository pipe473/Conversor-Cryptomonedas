import React, { Fragment, useState } from 'react';

const useMoneda = () => {


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