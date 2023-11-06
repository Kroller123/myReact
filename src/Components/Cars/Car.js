import React from 'react';

import {carService} from "../../services/carService";

const Car = ({car, setCarUpdate, trigger}) => {
    let {id, brand, price, year} = car

    let del = async () => {
        carService.deleteById(id)
        trigger()
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarUpdate(car)}>update</button>
            <button onClick={del}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};