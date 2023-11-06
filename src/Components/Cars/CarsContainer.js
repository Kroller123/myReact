import React, {useEffect, useState} from 'react';

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";

const CarsContainer = () => {
    let [cars, setCars] = useState([]);
    let [flag, setFlag] = useState(true)
    let [carUpdate, setCarUpdate] = useState(true)


    let trigger = () => {
        setFlag(prev => !prev)
    }

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [flag])


    return (
        <div>
            <CarForm triger={trigger} carUpdate={carUpdate}/>
            <hr/>
            <Cars cars={cars} setCarUpdate={setCarUpdate} trigger={trigger}/>
        </div>
    );
};

export {CarsContainer};