
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./";

export const GifGrid = ({categoria}) => {

    
   const {images, loading}= useFetchGifs(categoria);
     

  return (
    loading? <h3>Cargando...</h3>:
    <>
      <h3>{categoria}</h3>
      <div className="card-grid">
            {
               images.map(image=>(
                   <GifGridItem key={image.id} {...image}/>
                )
                )
            }
      </div>
    </>
  );
}