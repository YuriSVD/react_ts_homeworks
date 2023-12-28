import React, {useEffect, useState} from 'react';
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import Car from "../car/Car";
import CarForm from "../car/CarForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [allCars, setAllCars] = useState<ICar>();
    const [carForUpdate, setCarForUpdate] = useState<ICar>();
    useEffect(() => {
        carService.getAll()
            .then(value => value.data)
            .then(value => setCars(value));
    }, [allCars]);
    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            {cars.map((car) => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setAllCars={setAllCars}/>)}
        </div>
    );
};

export default Cars;