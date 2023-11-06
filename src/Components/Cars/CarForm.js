import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator/carValidator";

const CarForm = ({triger, carUpdate}) => {
    let {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }
    }, [carUpdate, setValue])
    let save = async (car) => {
        await carService.create(car)
        triger()
        reset()
    }

    let update = async (car) => {
        await carService.updateById(carUpdate.id, car)
        triger()
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(carUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')} />
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})} />
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})} />
                <button disabled={!isValid}>{carUpdate ? 'Update' : 'Save'}</button>
            </form>
            <form>
                {errors.brand && <div>brand:{errors.brand.message}</div>}
                {errors.price && <div>price:{errors.price.message}</div>}
                {errors.year && <div>year:{errors.year.message}</div>}
            </form>
        </div>
    );
};

export {CarForm};