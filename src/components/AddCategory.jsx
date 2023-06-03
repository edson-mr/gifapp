import { useState } from "react";

export const AddCategory = ({nuevaCategoria}) => {

    const [palabra, setPalabra] = useState("");
   

    const cambiandoPalabra=(e)=>{
           setPalabra(e.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        const valor= palabra.trim();
        if(valor.length<=1)return;
      
       nuevaCategoria(valor)
        setPalabra("")
       

    }
  return (
    <form onSubmit={onSubmit}>
      <input value={palabra} onChange={cambiandoPalabra} type="search" placeholder="Buscar gifs" />
    </form>
  );
}