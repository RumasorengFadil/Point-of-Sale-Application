import { formatNumberWithDots } from "@/utils/formatNumberWithDots";

const ProductDiscount = ({ discountedPrice = 0, className }) => {
    return (
        <span className={"font-semibold " + className}>
            Rp. {discountedPrice}
        </span>
    );
};

export default ProductDiscount;
