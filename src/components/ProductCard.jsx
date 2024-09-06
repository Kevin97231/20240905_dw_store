/* eslint-disable react/prop-types */
export const ProductCard = ({
  product,
  onClickFunction,
  title,
  displayButton,
}) => {
  return (
    <div className="shadow-xl card bg-base-100 w-96">
      <figure>
        <div className="h-40">
          <img src={product.image} alt={product.title} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.category}</p>
        <p>{product.decription}</p>
        <p>{product.price}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Voir</button>
          {displayButton && (
            <button
              className="btn btn-outline btn-error"
              onClick={() => onClickFunction(product)}
            >
              {title}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
