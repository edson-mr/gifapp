
 const getGifs = async (categoria) => {
   const url = `https://api.giphy.com/v1/gifs/search?api_key=j2GbP8aSjCned4h6ZvtwgUmLKkLBfj3D&q=${categoria}`;
   const response = await fetch(url);
   const { data } = await response.json();
   const gifs = data.map((gif) => ({
     id: gif.id,
     url: gif.images.original.url,
     titulo: gif.title,
   }));
   return gifs;
 };

 export default getGifs;