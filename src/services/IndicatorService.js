// const BACKEND_URL = "https://api-rest-retail.herokuapp.com/api/cliente/barrio";
const BACKEND_URL = "http://192.168.1.8:7788/api/cliente/barrio";

import axios from "axios";

import data from "../views/home/data";


/**
 * Función que permite obtener las ventas diarias asociados al vendedor y al punto de venta
 * @param eanPointSale Ean del punto de venta
 * @param salesman Vendedor
 * @returns Lista con las ventas diarias 
 */
const loadDailySales = async (eanPointSale, salesman) => 
{
  try
  {
    // console.log(JSON.stringify(cliente));
    // En el token debe estar mi vendedor
    // let respuesta = await axios.get(`${Constantes.BACKEND_URL}/dailysales`, { headers: tokenServices.autenticacionHeader() });

    dataTemp = data.vw_daily_sale.filter(dailySale => eanPointSale.concat("#").concat(salesman)  === dailySale.sk);

    let result = 
    {
      status: 200,
      data: dataTemp
    };

    // console.log("Respuesta API-REST getDailySales: ".concat(dataTemp.length));
    // console.log(JSON.stringify(respuesta));

    return { status: result.status, lstDailySalesBD: result.data };
  }
	catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al consultar los puntos de venta: ${error}`);
    return { status: error.request.status };
  }
}


/**
 * Función que permite obtener las ventas para el indicador seleccionado
 * @param pk Ean del punto de venta
 * @param sk Sort key table dynamodb compuesta por [ean_point_sale#salesman#indicator_type#medida]
 * @returns Lista con la ventas del indicador 
 */
 const loadDataIndicator = async (sk) => 
 {
   try
   {
     // console.log(JSON.stringify(cliente));
     // En el token debe estar mi vendedor
     // let respuesta = await axios.get(`${Constantes.BACKEND_URL}/dailysales`, { headers: tokenServices.autenticacionHeader() });
 
     dataTemp = data.vw_mobile_indicators.filter(dailySale => sk  === dailySale.sk);
 
     let result = 
     {
       status: 200,
       data: dataTemp
     };
 
     // console.log("Respuesta API-REST getDailySales: ".concat(dataTemp.length));
     // console.log(JSON.stringify(respuesta));
 
     return { status: result.status, lstDataIndicatorBD: result.data };
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
  loadDailySales,
  loadDataIndicator
};