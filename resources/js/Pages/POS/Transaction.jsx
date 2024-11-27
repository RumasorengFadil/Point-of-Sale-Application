import { Head, Link } from "@inertiajs/react";
import { FaMoneyBill, FaSearch } from "react-icons/fa";
import TransactionLayout from "@/Layouts/TransactionLayout";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { RiDeleteBinFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Transaction({ auth, products, categories }) {
    const [category, setCategory] = useState(categories[0].category_name);
    const [cart, setCart] = useState([]);

    const updateCartItem = (id, callback) => {
        setCart((prevCart) =>
            prevCart.map((item) => (item.id === id ? callback(item) : item))
        );
    };

    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
                return prevCart.map((item, index) =>
                    index === existingProductIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prevCart,
                {
                    id: product.id,
                    name: product.name,
                    quantity: 1,
                    unitPrice: product.price,
                    image: product.image,
                },
            ];
        });
    };

    const handleIncreaseQty = (product) => {
        updateCartItem(product.id, (item) => ({
            ...item,
            quantity: item.quantity + 1,
        }));
    };

    const handleDecreaseQty = (product) => {
        updateCartItem(product.id, (item) =>
            item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
    };

    const handleDestroyFromCart = (product) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== product.id)
        );
    };

    const handleClearCart = () => setCart([]);

    return (
        <TransactionLayout
            setCategory={setCategory}
            categories={categories}
            category={category}
            user={auth.user}
        >
            <Head title="Transaksi" />

            {/* Content */}
            <div className="flex flex-col overflow-y-auto overflow-x-hidden space-y-8 flex-1 px-4 pt-8  max-h-screen">
                {/* Header */}
                <div className="flex justify-between items-center h-max w-full">
                    <div className="flex w-full relative shadow-sm">
                        <FaSearch
                            className="absolute text-gray-400 h-full left-4"
                            size={24}
                        />
                        <TextInput
                            className="w-full px-12 py-3 placeholder-gray-400"
                            type="text"
                            placeholder="cari"
                        />
                    </div>
                </div>

                {/* Menu */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-7 h-full overflow-auto">
                    {products.map((product) => {
                        if (product.category.category_name !== category) return;
                        return (
                            <div
                                onClick={() => handleAddToCart(product)}
                                key={product.id}
                                className="flex w-full h-max flex-col items-center justify-center space-y-3 bg-white p-10 text-xs shadow-md+ rounded cursor-pointer"
                            >
                                <img
                                    className="w-24 h-20 rounded"
                                    src={`/storage/uploads/POS/img/products/${product.image}`}
                                    alt=""
                                />
                                <p>Rp. {formatNumberWithDots(product.price)}</p>
                                <p className="font-bold">{product.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Cart */}
            <div className="hidden lg:flex gap-8 flex-col py-4 px-4 items-start w-80 max-h-screen bg-white overflow-y-auto relative">
                <div className="flex w-full items-center justify-between ">
                    <h1>
                        <span className="font-bold">New</span> Order
                    </h1>
                    <RiDeleteBinFill
                        onClick={handleClearCart}
                        className="cursor-pointer"
                        size={20}
                    />
                </div>

                <div className="flex flex-col w-full h-full space-y-2">
                    {cart.map((product, i) => (
                        <div
                            key={i}
                            className="flex w-full py-4 px-4 shadow-md+ rounded space-y-3 space-x-2"
                        >
                            <div className="w-16 h-16 rounded">
                                <img
                                    className="w-full"
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
                                                handleDecreaseQty(product)
                                            }
                                            className="flex text-xl cursor-pointer items-center justify-center w-7 h-7 bg-primary rounded-full text-white"
                                        >
                                            -
                                        </div>
                                        <div className="">
                                            {product.quantity}
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleIncreaseQty(product)
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
                                            handleDestroyFromCart(product)
                                        }
                                        className="text-gray-400 cursor-pointer"
                                        size={15}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sticky rounded pl-5 pr-2 py-2 left-0 bottom-0 flex w-full items-center justify-between bg-primary cursor-pointer">
                    <h1 className="font-bold text-white">
                        Rp. {formatNumberWithDots(cart?.reduce((accumulator, product) => {
                            return accumulator + (product.unitPrice * product.quantity)
                        },0))}
                    </h1>

                    <div className="flex space-x-2 items-center text-white">
                        <p>Bayar</p>
                        <FaChevronRight
                            onClick={handleClearCart}
                            className="cursor-pointer"
                            size={20}
                        />
                    </div>
                </div>
            </div>
        </TransactionLayout>
    );
}
