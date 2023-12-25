import React, {useEffect, useState} from 'react';
import {ILaunch} from "../../interfaces/launch.interface";
import {launchService} from "../../services/launch.service";
import Launch from "../launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState<ILaunch[]>();
    useEffect(() => {
        launchService.getAll()
            .then(value => value.data)
            .then(value => setLaunches(value));
    });
    return (
        <div>
            {launches?.filter((launch) => launch.launch_year !== "2020").map((launch, index) => <Launch mission_name={launch.mission_name} launch_year={launch.launch_year} links={launch.links} key={index}/>)}
        </div>
    );
};

export default Launches;