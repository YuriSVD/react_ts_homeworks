import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/placeholder.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator";

const UserForm = () => {
    const {register, handleSubmit, reset, formState:{isValid, errors}} = useForm<IUser>({mode:"all", resolver: joiResolver(userValidator)});
    const save:SubmitHandler<IUser> = async (user) => {
        const {data} = await userService.create(user);
        reset();
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"enter name"} {...register("name")}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={"enter username"} {...register("username")}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={"enter email"} {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={"enter address street"} {...register("address.street")}/>
            {errors.address?.street && <span>{errors.address.street.message}</span>}
            <input type="text" placeholder={"enter address suite"} {...register("address.suite")}/>
            {errors.address?.suite && <span>{errors.address.suite.message}</span>}
            <input type="text" placeholder={"enter address city"} {...register("address.city")}/>
            {errors.address?.city && <span>{errors.address.city.message}</span>}
            <input type="text" placeholder={"enter address zipcode"} {...register("address.zipcode")}/>
            {errors.address?.zipcode && <span>{errors.address.zipcode.message}</span>}
            <input type="text" placeholder={"enter address geo lat"} {...register("address.geo.lat")}/>
            {errors.address?.geo?.lat && <span>{errors.address.geo.lat.message}</span>}
            <input type="text" placeholder={"enter address geo lng"} {...register("address.geo.lng")}/>
            {errors.address?.geo?.lng && <span>{errors.address.geo.lng.message}</span>}
            <input type="text" placeholder={"enter phone"} {...register("phone")}/>
            {errors.phone && <span>{errors.phone.message}</span>}
            <input type="text" placeholder={"enter website"} {...register("website")}/>
            {errors.website && <span>{errors.website.message}</span>}
            <input type="text" placeholder={"enter company name"} {...register("company.name")}/>
            {errors.company?.name && <span>{errors.company.name.message}</span>}
            <input type="text" placeholder={"enter company catchPhrase"} {...register("company.catchPhrase")}/>
            {errors.company?.catchPhrase && <span>{errors.company.catchPhrase.message}</span>}
            <input type="text" placeholder={"enter company bs"} {...register("company.bs")}/>
            {errors.company?.bs && <span>{errors.company.bs.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default UserForm;