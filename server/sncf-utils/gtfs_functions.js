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
  return getStops({ stop_name: name })[0].stop_id;
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
  }).map((stopTime) => ({ time: stopTime.arrival_time, id: stopTime.trip_id }));
}

export function get_short_name_by_route_id(routeId) {
    const stopTime = getStoptimes({
        route_id: routeId
    });
    if (stopTime.length == 0)
        return undefined;
    return stopTime[0].route_short_name;
}

export function get_train_name_by_departure(departure) {
    return get_short_name_by_route_id(departure.trip_id);
}