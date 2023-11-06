import React from 'react';

import {Car} from "./Car";

const Cars = ({cars, setCarUpdate, trigger}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarUpdate={setCarUpdate} trigger={trigger}/>)}
        </div>
    );
};

export {Cars};