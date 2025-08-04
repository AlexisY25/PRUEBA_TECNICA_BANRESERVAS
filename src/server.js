import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import xmlparser from "express-xml-bodyparser";
import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

/* 
INICIALIZACION DEL SERVIDOR PARA
*/
app.use(express.json());
app.use(bodyParser.json());
app.use(xmlparser());
app.use('/api', routes); 


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
