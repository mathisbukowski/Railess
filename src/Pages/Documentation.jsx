import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";
import ApiStatus from '../Components/ApiStatus.jsx';

const Documentation = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full py-[5rem] px-4 bg-white">
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', margin: 'auto' }} class = 'text-4xl'>Documentation Page</h1>
                <p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-2">The different api routes</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-bold font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">    - /api/getStopIdByName/:stationName</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">      This route shows the Id of each station.</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-bold font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">    - /api/getAllStations/</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">      This API route returns an array of all station names.</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-bold font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">    - /api/getAllDepartureFromStation/:stationName</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">    This API route allows you to obtain all departures from each station, returning the time with the corresponding ID.</p>
            </div>
            <ApiStatus />
            <Newsletter />
            <Footer />
        </div>
    )
};

export default Documentation;