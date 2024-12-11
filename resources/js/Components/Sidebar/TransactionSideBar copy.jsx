import { useTransactionContext } from "@/Context/TransactionContext";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { MdArrowBack } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { memo } from "react";
import { BiSolidDrink } from "react-icons/bi";

export default memo(function TransactionSideBar({ categories, className }) {
    const { category, setCategory } = useTransactionContext();

    return (
        <div className="flex flex-col w-full px-4 pt-8 space-y-8 bg-white |lg:static lg:w-36 lg:bg-gray-100 lg:py-5 lg:px-4 lg:space-y-4 lg:overflow-auto |">
            {/* Back Btn */}
            <div className="flex items-center w-full gap-2">
                <MdArrowBack
                    onClick={(e) => window.history.back()}
                    className="cursor-pointer"
                    size={24}
                />
                <p className="font-medium">Kembali</p>
                {/* <p className="lg:hidden">
                    <span className="font-bold">Orderan</span> Baru
                </p> */}
            </div>
            {/* Logo */}
            <div className="hidden lg:flex justify-center">
                <Link href="/">
                    <ApplicationLogo className="w-24 fill-current" />
                </Link>
            </div>

            {/* Sidebar List */}
            <div className="flex flex-row lg:flex-col gap-5 items-center">
                {categories.map((productCategory) => (
                    <div
                        key={productCategory.id}
                        onClick={() =>
                            setCategory(productCategory.category_name)
                        }
                        className={`flex flex-col cursor-pointer w-full shadow-md | lg:w-20 lg:shadow-none | h-20 rounded space-y-2 items-center justify-center p-2 ${
                            category === productCategory.category_name
                                ? "bg-primary"
                                : "bg-white"
                        }`}
                    >
                        <div>
                            {productCategory.category_name === "Makanan" ? (
                                <IoFastFood
                                    className={`${
                                        category ===
                                        productCategory.category_name
                                            ? "text-white"
                                            : "text-gray-900"
                                    }`}
                                    size={24}
                                />
                            ) : (
                                <BiSolidDrink
                                    className={`${
                                        category ===
                                        productCategory.category_name
                                            ? "text-white"
                                            : "text-gray-900"
                                    }`}
                                    size={24}
                                />
                            )}
                        </div>
                        <p
                            className={`text-xs ${
                                category === productCategory.category_name
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            {productCategory.category_name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
});
