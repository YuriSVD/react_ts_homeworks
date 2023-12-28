import React, {Dispatch, FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

interface IProps {
    setAllCars: Dispatch<ICar>;
    carForUpdate: ICar | undefined
}

const CarForm: FC<IProps> = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm<ICar>({mode: "all", resolver: joiResolver(carValidator)});
    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true});
            setValue("price", carForUpdate.price, {shouldValidate: true});
            setValue("year", carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate]);
    const save: SubmitHandler<ICar> = async (car) => {
        await carService.createCar(car);
        reset();
        setAllCars(car)
    };
    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate?.id as number, car);
        reset();
        setAllCars(car);
    };
    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={"enter brand"} {...register("brand")}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={"enter price"} {...register("price")}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={"enter year"} {...register("year")}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?"Update":"Save"}</button>
        </form>
    );
};

export default CarForm;