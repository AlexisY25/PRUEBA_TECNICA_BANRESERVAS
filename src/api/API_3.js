import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

//API_3 SE ENCARGA DE RESIVIR Y MOSTRAR LA TASA DE MONTO EN "Response Envelope"
export const cambioDeDivisasV3 = async (req, res) => {

  /*AQUI SE LLAMA LA URL Y LA API QUE SE ESTA CONSUMIENDO PARA PODER TENER LA
  TASAS ACTUALIZAS DE LAS MONEDAS*/
  const URL = process.env.URL;
  const API_KEY = process.env.API_KEY;

  //SE VALIDA SI NINGUN ELEMENTO SE REGISTRA VACIO
  const { exchange } = req.body;
  if (!exchange) {
    return res.status(400).json({ error: 'Falta el objeto exchange en el body' });
  }

  const { sourceCurrency, targetCurrency, quantity } = exchange;

  if (!sourceCurrency || !targetCurrency || !quantity) {
    return res.status(400).json({ error: 'No se le ha asignado ningún valor' });
  }

  try {

    //SE CONCATENA LA URL CON LA API_KEY PARA PODER HACER EL CALCULO Y EL CAMBIO A LA MONEDA QUE SE DESEA EL MONTO
    const url = `${URL}?access_key=${API_KEY}&from=${sourceCurrency.toUpperCase()}&to=${targetCurrency.toUpperCase()}&amount=${quantity}`;

    const response = await axios.get(url);
    const data = response.data;

    console.log(data);

    if (!data.success) {
      return res.status(500).json({ error: data.error });
    }

    //SE IMPRIME EN JSON EL RESULTADO DEL RATE ESPERADO 
    res.json({
      statusCode: 200,
      message: 'Conversión exitosa',
      data: {
        total: data.result,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "ERROR en el servidor o la API externa no respondió bien" });
  }
};
