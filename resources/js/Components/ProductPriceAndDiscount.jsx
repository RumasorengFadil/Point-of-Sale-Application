import ProductPrice from "./ProductPrice";
import ProductDiscount from "./ProductDiscount";

const ProductPriceAndDiscount = ({
    price = 0,
    discount = 0,
    discountWeight = "",
}) => {

    return (
        <div className="flex flex-col">
            <ProductPrice
                price={price}
                className={`${
                    discount ? "line-through text-gray-300" : `text-black`
                } `}
            />
            {discount ? (
                <ProductDiscount
                    className={`font-${discountWeight}`}
                    discountedPrice={discount}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default ProductPriceAndDiscount;
