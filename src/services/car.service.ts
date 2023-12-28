import {axiosServiceCar, IRes} from "./axios.service";
import {urls} from "../configs/urls";
import {ICar} from "../interfaces/car.interface";

const carService = {
    getAll: ():IRes<ICar[]> => axiosServiceCar.get(urls.cars),
    createCar: (car: ICar):IRes<ICar> => axiosServiceCar.post(urls.cars, car),
    updateById: (id: number, car: ICar):IRes<ICar> => axiosServiceCar.put(`${urls.cars}/${id}`, car),
    deleteCar: (id: number):IRes<void> => axiosServiceCar.delete(`${urls.cars}/${id}`)
}

export {carService}