import { IoFastFood } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { TbChevronsUpRight } from "react-icons/tb";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Head, Link, useForm } from "@inertiajs/react";
import toastUtils from "@/utils/toastUtils";
import ProductActionSection from "@/Organisms/ProductActionSection";

export default function Product({ auth, products }) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});

    const { delete: destroy } = useForm({});

    const handleModal = (product) => {
        setOpen(!open);
        setData(product);
    };

    const handleDelete = (e, productId) => {
        e.preventDefault();
        if (confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) {
            destroy(route("product.destroy", productId), {
                onError: (errors) => {
                    toastUtils.showError(errors);
                },
                onSuccess: (response) => {
                    toastUtils.showSuccess(response.props.flash);
                    setData("selectedBiblioIds", []);
                },
            });
        }
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Produk" />

            {/* Content */}
            <div className="flex flex-col overflow-y-auto overflow-x-hidden space-y-8 flex-1 px-4 max-h-screen">
                {/* Header */}
                <div className="flex justify-between font-bold items-center h-max w-full pt-8">
                    <h1>Invetaris</h1>
                </div>

                {/* Top Bar */}
                <ProductActionSection />

                {/* Ordered Products*/}
                <div className="flex flex-col w-full h-full overflow-y-auto space-y-5 px-4 py-6 my-8 rounded shadow-lg bg-white">
                    {/* Title */}
                    <p className="">
                        <span className="font-bold">Daftar</span> Produk
                    </p>

                    {/* Ordered Products Header */}
                    <div className="flex text-xs w-full h-8">
                        <div className="flex text-xs w-full h-max font-bold px-2 py-4">
                            ID
                        </div>
                        <div className="flex text-xs w-full h-max font-bold px-2 py-4">
                            Product
                        </div>
                        <div className="flex text-xs w-full h-max font-bold px-2 py-4">
                            Harga (Rp)
                        </div>
                        <div className="md:flex text-xs w-full h-max font-bold px-2 py-4 hidden">
                            Kategori
                        </div>
                        <div className="md:flex text-xs w-full h-max font-bold px-2 py-4 hidden">
                            Discount (%)
                        </div>
                        <div className="md:flex text-xs w-full h-max font-bold px-2 py-4 hidden">
                            Stok Barang
                        </div>
                        <div className="flex text-xs w-full h-max font-bold px-2 py-4">
                            Aksi
                        </div>
                    </div>
                    <hr className="border border-black" />

                    {/* Ordered Products Lists */}
                    <div className="flex flex-col space-y-5 w-full">
                        {products.map((product, i) => (
                            <div className="flex flex-col max-h-full" key={i}>
                                <div className="flex flex-auto h-full ">
                                    <div className="flex text-xs w-full h-full px-2 py-4 items-start">
                                        {product.id}
                                    </div>
                                    <div className="flex text-xs w-full h-full px-2 py-4 items-start gap-2">
                                        <div className="flex gap-2 items-center">
                                            <IoFastFood
                                                className={
                                                    product.image
                                                        ? "hidden"
                                                        : ""
                                                }
                                                size={24}
                                            />
                                            <img
                                                className={`max-w-6 h-6 hidden md:block`}
                                                src={`/storage/uploads/POS/img/products/${product.image}`}
                                                alt=""
                                            />
                                            <p>{product.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-xs w-full h-full px-2 py-4">
                                        {product.price}
                                    </div>
                                    <div className="md:flex text-xs w-full h-full px-2 py-4 hidden">
                                        {product.category.category_name}
                                    </div>
                                    <div className="md:flex text-xs w-full h-full px-2 py-4 hidden">
                                        {product.discount
                                            ? product.discount
                                            : 0}
                                    </div>
                                    <div className="md:flex text-xs w-full h-full px-2 py-4 hidden">
                                        {product.stock ? product.stock : 0}
                                    </div>
                                    <div className="flex text-xs w-full h-full px-2 py-4">
                                        <Link
                                            href={route(
                                                "product.edit",
                                                product.id
                                            )}
                                            className="flex flex-1"
                                        >
                                            <FaEdit
                                                className="text-primary cursor-pointer"
                                                size={16}
                                            />
                                        </Link>
                                        <Link
                                            onClick={(e) =>
                                                handleDelete(e, product.id)
                                            }
                                            className="flex flex-1"
                                        >
                                            <RiDeleteBinFill
                                                className="text-red-500 cursor-pointer"
                                                size={16}
                                            />
                                        </Link>
                                        <div
                                            onClick={() => handleModal(product)}
                                            className="flex flex-1 sm:hidden"
                                        >
                                            <TbChevronsUpRight
                                                className="cursor-pointer"
                                                size={16}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>

                    {/* Products Detail Modal */}
                    <Modal
                        show={open}
                        onClose={() => handleModal(data)}
                        maxWidth="sm"
                        className="md:hidden"
                    >
                        <div className="flex flex-col w-full min-w-80 px-4 py-5 gap-4">
                            <div className="flex justify-between items-center w-full">
                                <h1>
                                    <span className="font-bold">Detail</span>{" "}
                                    Produk
                                </h1>
                                <IoMdClose
                                    className="cursor-pointer"
                                    size={24}
                                    onClick={() => handleModal(data)}
                                />
                            </div>

                            <div className="flex justify-center">
                                <img
                                    className="rounded-md w-32"
                                    src={`/storage/uploads/POS/img/products/${data?.image}`}
                                    alt=""
                                />
                            </div>
                            <p className="text-xs text-center">
                                <span className="font-bold">ID:</span>{" "}
                                {data?.id}
                            </p>
                            <hr />
                            <p className="text-xs text-center">
                                <span className="font-bold">Produk:</span>{" "}
                                {data?.name}
                            </p>
                            <hr />
                            <p className="text-xs text-center">
                                <span className="font-bold">Harga:</span>{" "}
                                {data?.price}
                            </p>
                            <hr />
                            <p className="text-xs text-center">
                                <span className="font-bold">Kategori:</span>{" "}
                                {data.category?.category_name}
                            </p>
                            <hr />
                            <p className="text-xs text-center">
                                <span className="font-bold">Stok Barang:</span>{" "}
                                {data?.stock}
                            </p>
                            <hr />
                        </div>
                    </Modal>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
