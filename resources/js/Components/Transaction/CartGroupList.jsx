import { useTransactionContext } from "@/Context/TransactionContext";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { memo } from "react";
import { TiDelete } from "react-icons/ti";

export default memo(function CartGroupList() {
    const {
        cart,
        handleDecreaseQty,
        handleIncreaseQty,
        handleDestroyFromCart,
    } = useTransactionContext();

    return (
        <div className="flex flex-col w-full h-full space-y-2 mb-12">
            {cart.map((product, i) => (
                <div
                    key={i}
                    className="flex w-full py-4 px-4 shadow-md+ rounded space-y-3 space-x-2"
                >
                    <div className="w-16 h-16">
                        <img
                            className="w-full rounded"
                            src={`/storage/uploads/POS/img/products/${product.image}`}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-1 space-x-2">
                        <div className="flex flex-col space-y-5 text-sm w-full">
                            <p>{product.name}</p>
                            <div className="flex items-center justify-between ">
                                <div
                                    onClick={() =>
                                        handleDecreaseQty(product.id)
                                    }
                                    className="flex text-xl cursor-pointer items-center justify-center w-7 h-7 bg-primary rounded-full text-white"
                                >
                                    -
                                </div>
                                <div className="">{product.quantity}</div>
                                <div
                                    onClick={() =>
                                        handleIncreaseQty(product.id)
                                    }
                                    className="flex text-xl cursor-pointer items-center justify-center w-7 h-7 bg-primary rounded-full text-white"
                                >
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-sm justify-between w-full items-end">
                            <p className="text-gray-900 font-bold">
                                Rp.{" "}
                                {formatNumberWithDots(
                                    product.unitPrice * product.quantity
                                )}
                            </p>
                            <TiDelete
                                onClick={() =>
                                    handleDestroyFromCart(product.id)
                                }
                                className="text-gray-400 cursor-pointer"
                                size={15}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
});
// if (product.category.category_name !== category) return;
