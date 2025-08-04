## API cambio de divisas.

Esta API RESTfull creada con Express.js permite hacer cambios de moneda Ejemplo(De USD a DOP)

## Inicio.
Esta instrucciones le permite obtener una copia del proyecto en funcionamiento eb su maquina local para fines de desarrollo y prueba

**Prerequisitos**
- Node.js

**Instalacion**

1. Clonar repositorio

``` Clon de git https://github.com/AlexisY25/PRUEBA_TECNICA_BANRESERVAS.git ```

2. Instalar paquetes

```bash 
npm install 
```

3. cambiar el nombre del archivo `.env.example` a `.env` que esta ubicado en el directorio raiz con el puerto especificado y la URL, y en el apartado API_KEY cambiarlo por `18cb9389c7cac3cb5476a772332b400c` para poder correr el proyecto.

EJEMPLO:

```bash
URL=https://api.exchangeratesapi.io/v1/convert
PORT=3000
API_KEY=18cb9389c7cac3cb5476a772332b400c
```

4. Iniciar servidor
```bash
npm run dev
```

### Puntos de la API

Todas las rutas tienen el prefijo ennumerado `api1`, `api2`, `api3`

 Method   | Endpoint | Description          |
|----------|----------|----------------------|
| `POST`   | `api/api1/cambio_de_divisasV1`      | Aqui se aplica el primer requirimiento para la primera api la cual responde en JSON|
| `POST`    | `api/api2/cambio_de_divisasV2`      | Aqui se aplica el segundo requerimiento de la segunda apu la cual acepta y responde en XML|
| `POST`    | `api/api2/cambio_de_divisasV2`   | Este Endpoint cumple con el tercer y ultimo requerimiento, el cual acepta y responde en JSON   |

**Gentilicio**
Esta aplicacion utiliza el [API de divisas REST](https://api.exchangeratesapi.io) para poder obtener las tasas actualizadas de las monedas. el tipo de moneda de origen y destino se valida (Origen: `USD` Destino: `DOP` MONTO: `100`).

### Pruebas
Las pruebas fueron realizadas con Postam, aqui les dejo el collection de ellas
```https://pabp5247-7236280.postman.co/workspace/Pabp's-Workspace~266a664a-a591-4fad-89ad-c8f817f6551f/collection/47319401-c44ba07a-7018-4833-9fb9-884c5934add4?action=share&creator=47319401```

### Resultados

Los resultados esperados como se especifica en el doc proporsinado pueden ser visualizados en el siguiente link de postman:
```https://pabp5247-7236280.postman.co/workspace/Pabp's-Workspace~266a664a-a591-4fad-89ad-c8f817f6551f/collection/47319401-c44ba07a-7018-4833-9fb9-884c5934add4?action=share&creator=47319401```


### Dependencias

- **Express** Un framework de aplicaciones web Node.js rapido, flexible y sin prejuicios. Se utilizo para crear los endpopints

- **dotenv**  Modulo de dependencia cero que carga variables de entorno desde un `.env` el cual se utiliza para gestionara variables de entorno

- **axios** Biblioteca basada en promesas para poder hacer llamadas `HTTP`.

- **xmlparser** Es un middleware que permite procesar datos XML recibidos en las solicitudes `HTTP`.

- **bodyParser** Es un middleware que se utiliza para procesar los datos enviados en el cuerpo de una solicitud `HTTP`

- **routes** Definen cómo una aplicación responde a las solicitudes de los clientes a diferentes URLs y métodos `HTTP`
