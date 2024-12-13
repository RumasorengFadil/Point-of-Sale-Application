const ProductPrice = ({ price = 0, className }) => {
    return (
        <div className="flex flex-col">
            <span className={`${className}`}>Rp. {price}</span>
        </div>
    );
};

export default ProductPrice;
