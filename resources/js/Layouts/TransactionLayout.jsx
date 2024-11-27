import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { MdArrowBack } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import { memo } from "react";
import { BiSolidDrink } from "react-icons/bi";

export default memo(function TransactionLayout({
    children,
    setCategory,
    category,
    categories,
}) {
    const { baseRouteName } = usePage().props;

    return (
        <div className="h-screen flex-col-reverse flex sm:justify-center sm:pt-0 lg:flex-row bg-gray-100 dark:bg-gray-900">
            {/* Toast container to catch notifications globally */}
            <ToastContainer />

            {/* Sidebar */}
            <div className="flex flex-col w-full bg-white |lg:static lg:w-36 lg:bg-gray-100 lg:py-5 lg:px-4 lg:space-y-4 lg:overflow-auto |">
                {/* Back Btn */}
                <div
                    onClick={(e) => window.history.back()}
                    className="hidden lg:flex items-center w-full gap-2"
                >
                    <MdArrowBack className="cursor-pointer" size={24} />
                    <p className="font-medium">Kembali</p>
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
                            onClick={() =>
                                setCategory(productCategory.category_name)
                            }
                            className={`flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 ${
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
                                            category === productCategory.category_name
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
                    {/* <div
                        onClick={() => setCategory("makanan")}
                        className={`flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 ${
                            category === "makanan" ? "bg-primary" : "bg-white"
                        }`}
                    >
                        <div>
                            <IoFastFood
                                className={`${
                                    category === "makanan"
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                                size={24}
                            />
                        </div>
                        <p
                            className={`text-xs ${
                                category === "makanan"
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            Makanan
                        </p>
                    </div> */}
                    {/* <div
                        onClick={() => setCategory("minuman")}
                        className={`flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 ${
                            category === "minuman" ? "bg-primary " : "bg-white"
                        }`}
                    >
                        <div>
                            <BiSolidDrink
                                className={`${
                                    category === "minuman"
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                                size={24}
                            />
                        </div>
                        <p
                            className={`text-xs ${
                                category === "minuman"
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            Minuman
                        </p>
                    </div> */}
                </div>
            </div>
            {children}
        </div>
    );
});
