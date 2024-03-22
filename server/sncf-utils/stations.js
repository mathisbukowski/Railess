import { app } from "../server.js"

export function get_all_stations() {
	return app.get("stations");
}

export function get_station_by_city(city) {
	return app.get("stations").filter((station) => station.commune == city);
}