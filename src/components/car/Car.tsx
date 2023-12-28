import React, {Dispatch, FC, MouseEventHandler} from 'react';
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";

interface IProp {
    car: ICar;
    setCarForUpdate: Dispatch<ICar>
    setAllCars: Dispatch<ICar>
}

const Car: FC<IProp> = ({car, setCarForUpdate, setAllCars}) => {
    const {id, brand, price, year} = car;
    const deleteCar:MouseEventHandler<HTMLButtonElement> = async () => {
        await carService.deleteCar(id);
        setAllCars(car);
    }
    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <br/>
        </div>
    );
};

export default Car;