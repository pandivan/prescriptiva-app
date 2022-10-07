import React, { useState, useEffect } from "react";
import { Center, Select, CheckIcon } from 'native-base';

import * as SecureStore from "expo-secure-store";
import { Fontisto } from '@expo/vector-icons';

import BarVerticalChart from "../../components/BarVerticalChart";
import data from "../home/data";
import LineChart from "../../components/LineChart";
import BarHorizontalChart from "../../components/BarHorizontalChart";
import HeaderFilters from "../../components/HeaderFilters";
import Constants from "../../utilities/Constants";
import indicatorService from "../../services/IndicatorService";




/**
 * Componente funcional que permite generar indicadores a partir de preguntas predefinidas
 * @returns Screen Insight estático
 */
const StaticChart = ({ navigation }) =>
{
  const [question, setQuestion] = useState("");
  const [lstIndicatorData, setLstIndicatorData] = useState([]);

  /**
   * Funcion que permite cargar los puntos de venta asociados al vendedor
   */
  useEffect(() => 
  {
    console.log("useEffect StaticChart");

    const loadData = async () => 
    {
      try 
      {
        //Se obtiene los puntos de venta del storage
        let lstPointsSale = await SecureStore.getItemAsync("lstPointsSale");

        if (null !== lstPointsSale)
        {
            // Se adiciona el componente HeaderFilters al header de la barra de navegación con los puntos de venta JSON.parse(lstPointsSale)
            navigation.setOptions({ headerRight:() => (<HeaderFilters data={JSON.parse(lstPointsSale)} storePointSale={storePointSale} storeUnit={storeUnit}/>) });
        }
      }
      catch (error) 
      {
        console.log("Error al cargar la data en StaticChart")
      }
    }

    loadData();
  //  loadDailySales("7701001003306", "quantity");
  }, []);


  /**
   * Función que permite almacenar en el storage el ean del punto de venta seleccionado
   * @para eanPointSale Ean del punto de venta seleccionado
   */
  const storePointSale = async (eanPointSale) => 
  {
    console.log("storePointSale--> " + eanPointSale);
    try 
    {
      await SecureStore.setItemAsync("eanPointSale", JSON.stringify(eanPointSale));

      switch (question)
      {
        case "1":
          loadIndicatorData(eanPointSale);
          // (<BarVerticalChart data={data.dataBar}/>)
        break;

        case "2":
          // loadSalesTrend(eanPointSale);
          // (<LineChart data={data.dataLine}/>) 
        break;

        case "3":
          // loadTopProducts(eanPointSale);
          // (<BarHorizontalChart data={data.dataBarHorizontal}/>) 
        break;

        default:
          console.log("acceso denegado (StaticChart)");
        break;
      }
    }
    catch(error)
    {
      console.log("error al guardar el eanPointSale (StaticChart)")
    }
  }


  /**
   * Función que permite almacenar en el storage la unidad seleccionada [cantidad, valor]
   * @param unit Unidad seleccionada
   */
  const storeUnit = async (unit) => 
  {
    console.log("unit--> " + unit);
    try 
    {
      await SecureStore.setItemAsync("unit", JSON.stringify(unit));

      // setUnit(unit);
    }
    catch(error)
    {
      console.log("error al guardar el eanPointSale (StaticChart)")
    }
  }
  

  /**
   * Función que permite cargar la data para el indicador venta anual desde el API-REST según el punto de venta seleccionado
   * @param eanPointSale Ean del punto de venta
   */
  const loadIndicatorData = async (eanPointSale) => 
  {
    try 
    {
      //Se obtiene la data para el indicador de ventas diarias según el punto de venta seleccionado a traves del api-rest
      let { status, lstIndicatorDataBD } = await indicatorService.loadIndicatorData(eanPointSale, "KCM ALMACENES EXITO");

      switch (status) 
      {
        case Constants.STATUS_OK:
          setLstIndicatorData(lstIndicatorDataBD);
          break;

        case Constants.STATUS_ACCESO_DENEGADO:
          //Si tiene token es porque estoy logueado y debo informar que la sesión expiro
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("Tu sesión ha expirado!!!");
          //    setMostrarPopup(true);
          //  }

          //  autenticacionServices.removerToken();
          console.log("acceso denegado (StaticChart)");
          break;

        default:
          //Valida si hubo un error en el api-rest
          //Si tiene token es porque estoy logueado y debo informar que hubo un error en el backend
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("En el momento no es posible acceder a la\ninformación, favor intentarlo más tarde.");
          //    setMostrarPopup(true);
          //  }
          console.log("acceso denegado loadIndicatorData (StaticChart)");
          break;
      }
    } 
    catch (error) 
    {
      //TODO: Guardar log del error en BD
      console.log("error al obtener la data para el indicador de ventas diarias (StaticChart)");
    }
  };


  return (
    <Center flex={1} p="2" backgroundColor="#0F1319" justifyContent="flex-start" borderColor_="red.500" borderWidth_="3">
      <Select height="9"
        selectedValue={question} 
        minWidth="100%" 
        mt="2"
        accessibilityLabel="Choose Service" 
        placeholder="Seleccione una pregunta." 
        placeholderTextColor="#2E3043"
        backgroundColor="white"
        color="#2E3043"
        borderColor_="#553AB6"
        _selectedItem={{backgroundColor:"#281D56", endIcon: <CheckIcon size="5" />}}
        _actionSheetContent={{backgroundColor:"#0F1319"}}
        _actionSheet={{backgroundColor:"#0F1319"}}
        onValueChange={selectedQuestion => setQuestion(selectedQuestion)}
      >
        <Select.Item label="Cómo ha evolucionado la venta en el último año?" value="1" 
          backgroundColor="#1B1F25"
          borderRadius="10" mb="5"
          startIcon={<Fontisto name="shopping-sale" size={24} color="#6133E4" />}
          _text={{color:"white", mr:8}}
        />
        
        <Select.Item label="Cuál es la venta mensual de lo últimos 2 años?" value="2" 
          backgroundColor="#1B1F25"
          borderRadius="10" mb="5"
          startIcon={<Fontisto name="shopping-sale" size={24} color="#6133E4" />}
          _text={{color:"white", mr:8}} />

        <Select.Item label="Cuál es el Top 10 de productos mas vendidos?" value="3" 
          backgroundColor="#1B1F25"
          borderRadius="10" mb="5"
          startIcon={<Fontisto name="shopping-sale" size={24} color="#6133E4" />}
          _text={{color:"white", mr:8}} />
          
        <Select.Item label="Cuál es la venta acumulada frente al año anterior?" value="4" 
          backgroundColor="#1B1F25"
          borderRadius="10" mb="5"
          startIcon={<Fontisto name="shopping-sale" size={24} color="#6133E4" />}
          _text={{color:"white", mr:8}} />
      </Select>
      {
        ("1" === question) ?
          (<BarVerticalChart data={data.dataBar}/>) 
        :
          ("2" === question) ?
            (<LineChart data={data.dataLine}/>) //pasar IndicatorData
          :
            ("3" === question) ?
              (<BarHorizontalChart data={data.dataBarHorizontal}/>) 
            :
            null
      }
    </Center>
  );
}

export default StaticChart;
