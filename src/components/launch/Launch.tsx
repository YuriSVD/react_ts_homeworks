import React, {FC} from 'react';
import {ILaunch} from "../../interfaces/launch.interface";

interface IProps {
    launch: ILaunch;
}
const Launch:FC<ILaunch> = ({mission_name, launch_year,links}) => {
    return (
        <div>
            <img src={links.mission_patch_small} alt={mission_name}/>
            {<h3>{mission_name}, {launch_year} year</h3>}
        </div>
    );
};

export default Launch;