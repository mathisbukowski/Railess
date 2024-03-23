import React, { useEffect, useState } from 'react';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const About = () => {
    const { data, error, isLoading } = useSWR('/api/getStopIdByName/Libercourt', fetcher)

    if (error) return <div>Failed to fetch API.</div>
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <h1>About Page</h1>
            <p>{data.id}</p>
        </div>
    );
};

export default About;