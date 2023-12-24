import React, {FC} from 'react';
import {ISimpson} from "../../interfaces/simpson.interface";

interface IProps {
    simpson: ISimpson;
}

const Simpson: FC<IProps> = ({simpson}) => {
    const {name,surname, info, photo} = simpson;
    return (
        <div>
            <img src={photo} alt={name}/>
            <h3>{name} {surname}</h3>
            <p>{info}</p>
        </div>
    );
};

export default Simpson;