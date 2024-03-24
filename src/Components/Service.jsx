import React, { useState } from 'react';
import  useSWR from 'swr';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const ServiceComponent = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data: stations } = useSWR('/api/getAllStations', fetcher);
    const [station, setStation] = useState('Lille Flandres');

    const { data: departures, error, isLoading } = useSWR(`/api/getAllDepartureFromStation/${station}`, fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    const handleOnSearch = (string, results) => {
    };

    const handleOnSelect = (item) => {
        setStation(item.name);
    };

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
                <ReactSearchAutocomplete
                    items={stations?.map(station => ({name: station })) || []}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    autoFocus
                    formatResult={formatResult}
                />
            </div>
            <div className="w-[800px] mr-4 h-[600px] overflow-scroll overflow-x-hidden overflow-ellipsis mt-8">
                {departures && departures.map((departure, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-4 my-2 shadow-md">
                        <h2 className="text-lg font-semibold">{departure.trainLongName}</h2>
                        <p className="text-md text-gray-600">Departure : {departure.time.split(':').slice(0,2).join(':')}</p>
                        <p className="text-md text-gray-600">Train ID : {departure.trainShortName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceComponent