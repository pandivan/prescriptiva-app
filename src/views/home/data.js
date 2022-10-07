const dataBar = 
[
    {x: "Ene", y: 1},
    {x: "Feb", y: 2},
    {x: "Mar", y: 3},
    {x: "Abr", y: 5},
    {x: "May", y: 4},
    {x: "Jun", y: 7},
    {x: "Jul", y: 8},
    {x: "Ago", y: 9},
    {x: "Sep", y: 10},
    {x: "Oct", y: 11},
    {x: "Nov", y: 12},
    {x: "Dic", y: 13}
];


const dataLine=
[
  {x: "Ene", month_name: "Enero", previous_year_quantity: 3, previous_year_value:3000, current_year_quantity:6, current_year_value:6000},
  {x: "Feb", month_name: "Febrero",previous_year_quantity: 4, previous_year_value:4000, current_year_quantity:8, current_year_value:8000},
  {x: "Mar", month_name: "Marzo",previous_year_quantity: 5, previous_year_value:5000, current_year_quantity:10, current_year_value:10000},
  {x: "Abr", month_name: "Abril", previous_year_quantity: 6, previous_year_value:6000, current_year_quantity:12, current_year_value:12000},
  {x: "May", month_name: "Mayo", previous_year_quantity: 5, previous_year_value:5000, current_year_quantity:10, current_year_value:10000},
  {x: "Jun", month_name: "Junio",  previous_year_quantity: 5, previous_year_value:5000, current_year_quantity:10, current_year_value:10000},
  {x: "Jul", month_name: "Julio", previous_year_quantity: 4, previous_year_value:4000, current_year_quantity:8, current_year_value:8000},
  {x: "Ago", month_name: "Agosto", previous_year_quantity: 3, previous_year_value:3000, current_year_quantity:6, current_year_value:6000},
  {x: "Sep", month_name: "Septiembre",previous_year_quantity: 2, previous_year_value:2000, current_year_quantity:4, current_year_value:4000},
  {x: "Oct", month_name: "Octubre", previous_year_quantity: 4, previous_year_value:4000, current_year_quantity:8, current_year_value:8000},
  {x: "Nov", month_name: "Noviembre",  previous_year_quantity: 6, previous_year_value:6000, current_year_quantity:12, current_year_value:12000},
  {x: "Dic", month_name: "Diciembre", previous_year_quantity: 7, previous_year_value:7000, current_year_quantity:14, current_year_value:14000}
];

const dataBarMovil = 
[
    {x: "l", y: 1},
    {x: "m", y: 2},
    {x: "x", y: 3},
    {x: "j", y: 4},
    {x: "v", y: 6}
];


//enviar provider, point_sale, salesman, valor
const dataPie2=
[
  { x: 1, y: 85 }, 
  { x: 2, y: 100 - 85 }
];


//enviar provider, point_sale, salesman, valor
// const dataLine=
// [
//   {x: 1, y: 30},
//   {x: 2, y: 22},
//   {x: 3, y: 13},
//   {x: 4, y: 15},
//   {x: 5, y: 24},
//   {x: 6, y: 77},
//   {x: 7, y: 38},
//   {x: 8, y: 29},
//   {x: 9, y: 87},
//   {x: 10, y: 66},
//   {x: 11, y: 54},
//   {x: 12, y: 89}
// ];



const dataBarHorizontal =
[
  {x: "Suavitel", month_name: "Enero", previous_year_quantity: 10, previous_year_value:10000, current_year_quantity:20, current_year_value:20000},
  {x: "Soflan", month_name: "Febreo", previous_year_quantity: 9, previous_year_value:9000, current_year_quantity:19, current_year_value:19000},
  {x: "Colg. 125ML", month_name: "Marzo", previous_year_quantity: 8, previous_year_value:8000, current_year_quantity:18, current_year_value:18000},
  {x: "Fabuloso", month_name: "Abril", previous_year_quantity: 7, previous_year_value:7000, current_year_quantity:17, current_year_value:17000},
  {x: "Clean Mint", month_name: "Mayo", previous_year_quantity: 6, previous_year_value:6000, current_year_quantity:16, current_year_value:2000},
  {x: "Trip Accion", month_name: "Junio", previous_year_quantity: 5, previous_year_value:5000, current_year_quantity:15, current_year_value:15000},
  {x: "Ajax", month_name: "Julio", previous_year_quantity: 4, previous_year_value:4000, current_year_quantity:14, current_year_value:14000},
  {x: "Lavaplatos ", month_name: "Agosto", previous_year_quantity: 3, previous_year_value:3000, current_year_quantity:13, current_year_value:13000},
  {x: "Axion Aloe", month_name: "Septiembre", previous_year_quantity: 2, previous_year_value:2000, current_year_quantity:12, current_year_value:12000},
  {x: "Dental Flos", month_name: "Octubre", previous_year_quantity: 1, previous_year_value:1000, current_year_quantity:11, current_year_value:11000}
];

const dataPtosVta =
[
  {ean_point_of_sale:"1010", point_of_sale:"Exito Chipichape"},
  {ean_point_of_sale:"1011", point_of_sale:"Exito Flora"},
  {ean_point_of_sale:"1012", point_of_sale:"Exito San Fernando"},
]

const vw_daily_sale = 
[
  {pk:"7702010000010", sk:"7701001002804#KCM ALMACENES EXITO", quantity:194, total_price:2474634, day_of_week:'l'},
  {pk:"7702010000010", sk:"7701001002804#KCM ALMACENES EXITO", quantity:243, total_price:3147016, day_of_week:'m'},
  {pk:"7702010000010", sk:"7701001002804#KCM ALMACENES EXITO", quantity:250, total_price:3213585, day_of_week:'x'},
  {pk:"7702010000010", sk:"7701001002804#KCM ALMACENES EXITO", quantity:160, total_price:2197250, day_of_week:'j'},
  {pk:"7702010000010", sk:"7701001002804#KCM ALMACENES EXITO", quantity:113, total_price:1614675, day_of_week:'v'},
  {pk:"7702010000010", sk:"7701001002804#KCM ALMACENES EXITO", quantity:160, total_price:2075700, day_of_week:'s'},
  {pk:"7702010000010", sk:"7701001002804#KCM ALMACENES EXITO", quantity:204, total_price:2885769, day_of_week:'d'},
  {pk:"7702010000010", sk:"7701001002903#KCM ALMACENES EXITO", quantity:63, total_price:632936, day_of_week:'l'},
  {pk:"7702010000010", sk:"7701001002903#KCM ALMACENES EXITO", quantity:61, total_price:718183, day_of_week:'m'},
  {pk:"7702010000010", sk:"7701001002903#KCM ALMACENES EXITO", quantity:31, total_price:175409, day_of_week:'x'},
  {pk:"7702010000010", sk:"7701001002903#KCM ALMACENES EXITO", quantity:57, total_price:729109, day_of_week:'j'},
  {pk:"7702010000010", sk:"7701001002903#KCM ALMACENES EXITO", quantity:59, total_price:735962, day_of_week:'v'},
  {pk:"7702010000010", sk:"7701001002903#KCM ALMACENES EXITO", quantity:44, total_price:502873, day_of_week:'s'},
  {pk:"7702010000010", sk:"7701001002903#KCM ALMACENES EXITO", quantity:71, total_price:831907, day_of_week:'d'},
  {pk:"7702010000010", sk:"7701001003306#KCM ALMACENES EXITO", quantity:449, total_price:5638616, day_of_week:'l'},
  {pk:"7702010000010", sk:"7701001003306#KCM ALMACENES EXITO", quantity:421, total_price:5206511, day_of_week:'m'},
  {pk:"7702010000010", sk:"7701001003306#KCM ALMACENES EXITO", quantity:604, total_price:7220220, day_of_week:'x'},
  {pk:"7702010000010", sk:"7701001003306#KCM ALMACENES EXITO", quantity:315, total_price:4032222, day_of_week:'j'},
  {pk:"7702010000010", sk:"7701001003306#KCM ALMACENES EXITO", quantity:339, total_price:4153212, day_of_week:'v'},
  {pk:"7702010000010", sk:"7701001003306#KCM ALMACENES EXITO", quantity:412, total_price:5498253, day_of_week:'s'},
  {pk:"7702010000010", sk:"7701001003306#KCM ALMACENES EXITO", quantity:461, total_price:6285500, day_of_week:'d'}
]

//La "x" hace referencia al label de cada partición
//La "y" es la cantidad
//Cuando colocamos la etiqueta "label" esta etiqueta anula a X y por ende como label de particion toma lo q coloque en "label"
const vw_mobile_indicators=
[
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#quantity", x:"TOOTHPASTE", y:33693},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#quantity", x:"LIQUIDS", y:19549},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#quantity", x:"CLEAN", y:13726},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#quantity", x:"DISH HAND", y:12115},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#quantity", x:"OTROS", y:50000},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#value", x:"TOOTHPASTE", y:327550291},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#value", x:"LIQUIDS", y:271059066},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#value", x:"CLEAN", y:156304685},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#value", x:"DISH HAND", y:90843002},
  {pk:"7702010000010", sk:"7701001002804#JUAN CARLOS GONZALEZ#1#value", x:"OTROS", y:300000},

  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#quantity", x:"TOOTHPASTE", y:28471},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#quantity", x:"BAR SOAP", y:7212},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#quantity", x:"DISH HAND", y:3859},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#quantity", x:"LIQUIDS", y:3728},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#quantity", x:"OTROS", y:50000},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#value", x:"TOOTHPASTE", y:217272091},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#value", x:"BAR SOAP", y:48686643},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#value", x:"LIQUIDS", y:48519262},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#value", x:"AP/DEO", y:39606041},
  {pk:"7702010000010", sk:"7701001002903#JUAN CARLOS GONZALEZ#1#value", x:"OTROS", y:300000},

  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#quantity", x:"TOOTHPASTE", y:67342},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#quantity", x:"LIQUIDS", y:34160},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#quantity", x:"CLEAN", y:31415},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#quantity", x:"DISH HAND", y:25209},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#quantity", x:"OTROS", y:50000},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#value", x:"TOOTHPASTE", y:687022452},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#value", x:"LIQUIDS", y:479963199},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#value", x:"CLEAN", y:334831637},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#value", x:"DISH HAND", y:204253751},
  {pk:"7702010000010", sk:"7701001003306#JUAN CARLOS GONZALEZ#1#value", x:"OTROS", y:300000},
];


const vw_dim_points_of_sale = 
[
  {ean_point_sale:"7701001002804", point_sale_name:"028 - EXITO DEL ESTE"},
  {ean_point_sale:"7701001002903", point_sale_name:"029 - EXITO GRAN VIA"},
  {ean_point_sale:"7701001003306", point_sale_name:"033 - EXITO POBLADO"}
]

export default 
{
  dataBar,
  dataPie2,
  dataBarMovil,
  dataLine,
  dataBarHorizontal,
  dataPtosVta,
  vw_daily_sale,
  vw_dim_points_of_sale,
  vw_mobile_indicators
};