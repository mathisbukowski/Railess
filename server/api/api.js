import express from 'express'
import { get_stop_id_by_name } from "../sncf-utils/gtfs_functions.js";

const apiRoute = express.Router();

apiRoute.get('/getStopIdByName/:name', (req, res) => {
    res.json(get_stop_id_by_name(req.params.name));
});

export { apiRoute };