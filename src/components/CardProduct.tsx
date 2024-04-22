import Button from "./Button";
import CardContainer from "./CardContainer";

type productType = {
  title: string;
  description: string;
  price: number;
};

interface CardProductProps {
  imgUrl: string;
  product: productType;
}

const CardProduct = ({ imgUrl, product }: CardProductProps) => {
  return (
    <CardContainer className="box-content flex w-[400px] flex-row gap-3">
      <>
        <div className="basis-2/5">
          <img
            src={imgUrl}
            alt="product-image"
            className="h-[215px] object-cover"
          />
        </div>
        <div className="relative basis-3/5">
          <span className="line-clamp-2 font-medium">{product.title}</span>
          <p className="mt-1 line-clamp-6 border-t border-gray-500 pt-1 text-sm text-gray-500">
            {product.description}
          </p>
          <div className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between">
            <Button
              name="Add to cart"
              onClick={() => console.log("add to cart")}
              size="small"
              primary
            />
            <span className="font-bold">$ {product.price}</span>
          </div>
        </div>
      </>
    </CardContainer>
  );
};

export default CardProduct;
