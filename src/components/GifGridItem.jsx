
export const GifGridItem = ({url,titulo}) => (
    <div className="card">
      <img src={url} alt={titulo} />
      <p>{titulo}</p>
    </div>
  );