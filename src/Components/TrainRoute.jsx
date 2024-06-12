import {Link, useParams} from "react-router-dom";
import useSWR from "swr";
import React, {useState} from "react";


export default function TrainRoute() {
    const {trip_id} = useParams();
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data: stations, error, isLoading} = useSWR(`/api/getAllCrossedStationsByTrip/${trip_id}`, fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            {stations && stations.map((station, index) => (
                <div key={index}
                     className="flex flex-col justify-center items-center rounded-lg bg-white shadow-md border border-gray-200 p-6 my-4 w-[500px] h-[200px] mx-auto">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Station : {station.stationName}</h2>
                    <p className="text-lg text-gray-600">Departure : {station.time.split(':').slice(0, 2).join(':')}</p>
                </div>
            ))}
        </>
    )
}
// <h2 className="text-lg font-semibold">{station.trainName}</h2>