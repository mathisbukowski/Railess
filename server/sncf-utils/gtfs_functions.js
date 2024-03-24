import fs from 'node:fs/promises'
import { importGtfs, getStops, getTrips, getRoutes, getStoptimes } from "gtfs";

export async function load_gtfs_data() {
  const config = JSON.parse(
    await fs.readFile(new URL("../../config.json", import.meta.url))
  );

  try {
    await importGtfs(config);
  } catch (error) {
    console.error(error);
  }
}

// Stops
export function get_stop_id_by_name(name) {
    const stopId = getStops({ stop_name: name });

    if (stopId.length === 0)
        return undefined;
    return getStops({ stop_name: name })[0].stop_id;
}

export function get_all_station_name() {
    const stationsName = getStops()
        .map((stop) => stop.stop_name);
    return [...new Set(stationsName)];
}

// Routes
export function get_route_id(stopId) {
  return getRoutes({ stop_id: stopId })
    .map((route) => route.route_id);
}

// Stop time
export function get_all_departure_by_stop_name(name) {
  return getStoptimes({
    stop_id: get_stop_id_by_name(name),
  }).map((stopTime) => ({ time: stopTime.departure_time, trip_id: stopTime.trip_id }));
}

export function get_stop_time_by_stop_name(name) {
  return getStoptimes({
    stop_id: get_stop_id_by_name(name),
  });
}

export function get_trip_by_trip_id(tripId) {
  const trip = getTrips({
    trip_id: tripId
  });
  if (!trip)
    return undefined;
  return trip[0];
}

export function get_route_id_by_trip_id(tripId) {
    const trip = getTrips({
        trip_id: tripId
    });
    if (trip == [])
      return undefined;
    return trip[0].route_id;
}

export function get_short_name_by_trip_id(tripId) {
    const stopTime = getRoutes({
        route_id: tripId
    });
    if (stopTime == [])
        return undefined;
    return stopTime[0].route_short_name;
}

export function get_train_short_name(departure) {
    return get_short_name_by_trip_id(get_route_id_by_trip_id(departure.trip_id));
}

export function get_long_name_by_trip_id(tripId) {
    const stopTime = getRoutes({
        route_id: tripId
    });
    if (stopTime == [])
        return undefined;
    return stopTime[0].route_long_name;
}

export function get_train_long_name(departure) {
    return get_long_name_by_trip_id(get_route_id_by_trip_id(departure.trip_id));
}