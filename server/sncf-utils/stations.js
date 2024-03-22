import { app } from "../server.js"

export function get_station_by_city(city) {
	return app.get("stations").filter((station) => station.commune == city);
}