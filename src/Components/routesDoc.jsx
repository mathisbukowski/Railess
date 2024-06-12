import ApiStatus from "./ApiStatus.jsx";

export default function RoutesDocComponent() {
    return (
        <>
            <div
                className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl w-full">
                    <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">API Documentation</h1>

                    <section className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">API Latency :</h2>
                        <p><strong>Endpoint:</strong> <code className="bg-gray-200 rounded px-2 py-1">/api/status</code>
                        </p>
                        <p><strong>Method:</strong> GET</p>
                        <p><strong>Description:</strong> This endpoint returns the status of the API.</p>
                        <p className="text-green-600"><strong>Status:</strong> Operational.</p>
                        <p><strong>Latency: </strong><ApiStatus/></p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Route 1: Get id of a station with
                            name</h2>
                        <p><strong>Endpoint:</strong> <code
                            className="bg-gray-200 rounded px-2 py-1">/api/getStopIdByName/:stationName</code></p>
                        <p><strong>Method:</strong> GET</p>
                        <p><strong>Description:</strong> Return an ID.</p>
                        <p className="text-green-600"><strong>Status:</strong> Operational.</p>
                        <p><strong>Response:</strong></p>
                        <pre className="bg-gray-100 border border-gray-300 p-4 rounded shadow-inner mt-2"><code>{`{
    {
    "id": "StopPoint:OCETrain TER-87345256"
    }
}`}</code></pre>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Route 2: Get all stations</h2>
                        <p><strong>Endpoint:</strong> <code
                            className="bg-gray-200 rounded px-2 py-1">/api/getAllStations/
                        </code></p>
                        <p><strong>Method:</strong> GET</p>
                        <p><strong>Description:</strong> Return an array of all station names.</p>
                        <p className="text-green-600"><strong>Status:</strong> Operational.</p>
                        <p><strong>Response:</strong></p>
                        <pre className="bg-gray-100 border border-gray-300 p-4 rounded shadow-inner mt-2"><code>{`{
    "Saint-Just-en-Chaussée",
    "Gannes",
    "Breteuil-Embranchement",
    "La Faloise",
    "Ailly-sur-Noye",
    "Boves",
    "Pont-Remy",
    "Longpré-les-Corps-Saints",
    "Again and again...!",
  },"
}`}</code></pre>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Route 3: Get All Departures from a
                            station</h2>
                        <p><strong>Endpoint:</strong> <code
                            className="bg-gray-200 rounded px-2 py-1">/api/getAllDepartureFromStation/:stationName</code>
                        </p>
                        <p><strong>Method:</strong> GET</p>
                        <p><strong>Description:</strong> Return an array with all departures from the name of a station
                            provided.</p>
                        <p className="text-red-600"><strong>Status:</strong> In maintenance.</p>
                        <p><strong>Response: </strong></p>
                        <pre
                            className="bg-gray-100 border border-gray-300 p-4 rounded shadow-inner mt-2"><code>{`[]`}</code></pre>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Route 4: Get All Crossed Stations</h2>
                        <p><strong>Endpoint:</strong> <code
                            className="bg-gray-200 rounded px-2 py-1">/api/getAllCrossedStationsByTrip/:tripId</code>
                        </p>
                        <p><strong>Method:</strong> GET</p>
                        <p><strong>Description:</strong> Return an array of objects. Each object contains the station
                            name and the departure time when the train crosses that station for the given trip id.</p>
                        <p className="text-red-600"><strong>Status:</strong> In maintenance.</p>
                        <p><strong>Response: </strong></p>
                        <pre
                            className="bg-gray-100 border border-gray-300 p-4 rounded shadow-inner mt-2"><code>{`[]`}</code></pre>
                    </section>
                </div>
            </div>
        </>
    )
}