import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

//API_1 SE ENCARGA DE RECIBIR EL INPUT EN JSON Y DAR EL RATE EN JSON
export const cambioDeDivisasV1 = async (req, res) => {

  /*AQUI SE LLAMA LA URL Y LA API QUE SE ESTA CONSUMIENDO PARA PODER TENER LA
  TASAS ACTUALIZAS DE LAS MONEDAS*/
  const URL = process.env.URL;
  const API_KEY = process.env.API_KEY;
  
  const { from, to, amount } = req.body;

  //SE VALIDA SI NINGUN ELEMENTO SE REGISTRA VACIO
  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'No se le ha asignado ningún valor' });
  }

  try {

    //SE CONCATENA LA URL CON LA API_KEY PARA PODER HACER EL CALCULO Y EL CAMBIO A LA MONEDA QUE SE DESEA EL MONTO
    const url = `${URL}?access_key=${API_KEY}&from=${from.toUpperCase()}&to=${to.toUpperCase()}&amount=${amount}`;

    const response = await axios.get(url);
    const data = response.data;

    console.log(data);

    if (!data.success) {
      return res.status(500).json({ error: data.error });
    }

    //SE IMPRIME EN JSON EL RESULTADO DEL RATE ESPERADO 
    console.log(data.info);
    res.json({
      rate: data.result
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "ERROR en el servidor o la API externa no respondió bien" });
  }
};
