
const DiscountedPrice = ({ discountedPrice, className }) => {
    return (
        <span className={className}>
            Rp. {discountedPrice}
        </span>
    );
};

export default DiscountedPrice;
