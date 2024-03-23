import fs from 'node:fs/promises'

export async function get_stations_from_file() {
	const stationList = await fs.readFile("./data/liste-des-gares.json");
	return JSON.parse(stationList);
}
