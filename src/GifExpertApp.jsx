import { useState } from "react";
import {AddCategory,GifGrid} from "./components";


const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([]);

  const agregarCategoria=(categoria)=>{
    if(categorias.includes(categoria))return;
        setCategorias([categoria,...categorias]);
  }

  return (
    <>
      {/* titulo */}
      <h1>Buscador de Gifs</h1>
      {/* input */}
      <AddCategory nuevaCategoria={(categoria)=> agregarCategoria(categoria)}/>
      {/* listado de gif */}
      {
        categorias.map((categoria) =><GifGrid key={categoria} categoria={categoria}/>)
      }
    </>
  );
};

export default GifExpertApp;
