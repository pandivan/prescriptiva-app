// const BACKEND_URL = "https://api-rest-retail.herokuapp.com/api/cliente/barrio";
const BACKEND_URL = "http://192.168.1.8:7788/api/cliente/barrio";

import axios from "axios";




/**
 * Función que permite actualizar o registrar un nuevo cliente en BD
 * @param cliente, Cliente actualizar o registrar
 */
const registerCliente = async (client) => 
{
  try
  {
    // console.log(JSON.stringify(cliente));
    // let result = await axios.post(`${BACKEND_URL}`, client);

    let result = 
    {
      data:"token_pandi"
    };

    console.log("Respuesta API-REST Registrar Cliente.");
    // console.log(JSON.stringify(respuesta));

    return { success: ("" !== result.data), userToken: result.data };
  }
	catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al registrar: ${error}`);
    return { success: false };
  }
}



/**
 * Función que permite validar un cliente en BD, según login y password
 * @param client, Cliente a consultar
 */
const validateClient = async (client) => 
{
  try
  {
    // let result = await axios.post(`${BACKEND_URL}/validar`, client);
    let result = 
    {
      data:"token_pandi"
    };

    console.log("Respuesta API-REST Consultar Cliente ");
    // console.log(JSON.stringify(result));

    return { success: ("" !== result.data), userToken: result.data };
  }
  catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al validar: ${error}`);
    return { success: false };
  }
}


export default 
{
  registerCliente,
  validateClient
};