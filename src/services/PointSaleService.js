// const BACKEND_URL = "https://api-rest-retail.herokuapp.com/api/cliente/barrio";
const BACKEND_URL = "http://192.168.1.8:7788/api/cliente/barrio";

import axios from "axios";

import data from "../views/home/data";


/**
 * Función que permite obtener los puntos de venta asociados al vendedor
 */
const getAllPointsSale = async () => 
{
  try
  {
    // console.log(JSON.stringify(cliente));
    // En el token debe estar mi vendedor
    // let respuesta = await axios.get(`${Constantes.BACKEND_URL}/pointsofsale`, { headers: tokenServices.autenticacionHeader() });

    let result = 
    {
      status: 200,
      data: data.vw_dim_points_of_sale
    };

    // console.log("Respuesta API-REST getAllPointsOfSale");
    // console.log(JSON.stringify(respuesta));

    return { status: result.status, lstPointsSaleBD: result.data };
  }
	catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al consultar los puntos de venta: ${error}`);
    return { status: error.request.status };
  }
}



export default 
{
  getAllPointsSale
};