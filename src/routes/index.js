import express from 'express';
import {cambioDeDivisasV1} from '../api/API_1.js';
import {cambioDeDivisasV2} from '../api/API_2.js';
import {cambioDeDivisasV3} from '../api/API_3.js';

const router = express.Router();

/*
SE IMPORTAN LOS ENDPOINT PARA PODER ASIGNARLES UNA RUTA Y UN METODO
PARA PODER SER UTILIZADAS
*/
router.post('/api1/cambio_de_divisasV1', cambioDeDivisasV1);
router.post('/api2/cambio_de_divisasV2', cambioDeDivisasV2);
router.post('/api3/cambio_de_divisasV3', cambioDeDivisasV3);

export default router;
