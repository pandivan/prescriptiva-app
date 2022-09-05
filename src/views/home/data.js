const dataBar = 
[
    {x: "ene", y: 1},
    {x: "feb", y: 2},
    {x: "mar", y: 3},
    {x: "abr", y: 5},
    {x: "may", y: 4},
    {x: "jun", y: 7},
    {x: "jul", y: 8}
];

const dataCategoria = 
[
    {x: "Dulces", y: 1},
    {x: "Bebidas", y: 2},
    {x: "Licor", y: 3},
    {x: "Aseo", y: 4},
    {x: "Comestibles", y: 5}
];


//La "x" hace referencia al label de cada partición
//La "y" es la cantidad
//Cuando colocamos la etiqueta "label" esta etiqueta anula a X y por ende como label de particion toma lo q coloque en "label"
const dataPie=
[
  {  x:1, y: 20, label: "Comestibles" },
  {  x:2, y: 20, label: "Aseo" },
  {  x:3, y: 40, label: "Licor" },
  {  x:3, y: 10, label: "Bebidas" },
  {  x:3, y: 10, label: "Dulces" }
];

export default 
{
  dataBar,
  dataPie,
  dataCategoria
};
