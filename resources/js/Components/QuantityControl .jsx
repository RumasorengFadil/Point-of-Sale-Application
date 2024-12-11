import { Link } from "@inertiajs/react";

export default function QuantityControl({
    active = false,
    className = "",
    quantity,
    onIncrease,
    onDecrease,
}) {
    return (
        <div className={`flex items-center ${className}`}>
            <div
                onClick={onDecrease}
                className="flex text-xl cursor-pointer items-center justify-center w-7 h-7 bg-primary rounded-full text-white"
            >
                -
            </div>
            <div className="">{quantity}</div>
            <div
                onClick={onIncrease}
                className="flex text-xl cursor-pointer items-center justify-center w-7 h-7 bg-primary rounded-full text-white"
            >
                +
            </div>
        </div>
    );
}
