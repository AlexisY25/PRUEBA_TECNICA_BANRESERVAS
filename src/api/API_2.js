import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

//API_2 SE ENCARGA DE HACER EL TASA DE CAMBIO EN "XML"
export const cambioDeDivisasV2 = async (req, res) => {

  /*AQUI SE LLAMA LA URL Y LA API QUE SE ESTA CONSUMIENDO PARA PODER TENER LA
  TASAS ACTUALIZAS DE LAS MONEDAS*/
  const URL = process.env.URL;
  const API_KEY = process.env.API_KEY;

  const { from, to, amount } = req.body.xml || {};

  //SE VALIDA SI NINGUN ELEMENTO SE REGISTRA VACIO
  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'No se le ha asignado ningún valor' });
  }

  try {

    //SE CONCATENA LA URL CON LA API_KEY PARA PODER HACER EL CALCULO Y EL CAMBIO A LA MONEDA QUE SE DESEA EL MONTO
    const url = `${URL}?access_key=${API_KEY}&from=${from[0].toUpperCase()}&to=${to[0].toUpperCase()}&amount=${amount[0]}`;

    const response = await axios.get(url);
    const data = response.data;

    if (!data.success) {
      return res.status(500).json({ error: data.error });
    }

    //SE IMPRIME EL RESULTADO ESPERADO EN "XML"
    res.set('Content-Type', 'application/xml');
    res.send(
      `<XML>
        <Result>${data.result}</Result>
      </XML>`
    );

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "ERROR en el servidor o la API externa no respondió bien" });
  }
};
