import express from 'express'
import { get_all_departure_by_stop_name, get_stop_id_by_name, get_all_station_name, get_train_long_name, get_train_short_name, get_all_crossed_stations_by_trip_id} from "../sncf-utils/gtfs_functions.js";

const apiRoute = express.Router();

apiRoute.get('/getLatency/', (req, res) => {
    const startHrTime = process.hrtime();

    fetch(`http://localhost:${process.env.PORT}/api/getAllDepartureFromStation/Libercourt`)
        .then(() => {
            const elapsedHrTime = process.hrtime(startHrTime);
            const latency = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
            res.json({latency: latency});
        }).catch(() => {
            res.send(500, { error: "Cannot fetch API to get latency." });
        });
});

apiRoute.get('/getStopIdByName/:stationName', (req, res) => {
    res.json({id: get_stop_id_by_name(req.params.stationName)});
});

apiRoute.get('/getAllStations/', (req, res) => {
    res.json(get_all_station_name());
});

apiRoute.get('/getAllDepartureFromStation/:stationName', (req, res) => {
    let allDepartures = get_all_departure_by_stop_name(req.params.stationName);

    allDepartures.forEach((departure) => {
        departure.trainShortName = get_train_short_name(departure);
        departure.trainLongName = get_train_long_name(departure);
    });
    allDepartures = allDepartures.filter((departure) => departure.trip_id.endsWith("53Z"));

    res.json(allDepartures.sort(function (a, b) {
        return a.time.localeCompare(b.time);
    }));
});

apiRoute.get('/getAllCrossedStationsByTrip/:tripId', (req, res) => {
    const crossedStations = get_all_crossed_stations_by_trip_id(req.params.tripId);
    if (crossedStations) {
        res.json(crossedStations);
    } else {
        res.status(404).send({ error: "No stations found for this trip ID." });
    }
});

export { apiRoute };