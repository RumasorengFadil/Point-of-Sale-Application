import ActionableIcon from "@/Components/ActionableIcon ";
import Modal from "@/Components/Modal";
import TitleSection from "@/Components/SectionTitle";
import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableData } from "@/Components/TableData";
import { TableHeader } from "@/Components/TableHeader";
import { TableRow } from "@/Components/TableRow";
import toastUtils from "@/utils/toastUtils";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { TbChevronsUpRight } from "react-icons/tb";

const ProductTable = ({ products }) => {
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
        <div className="flex h-full overflow-auto flex-col shadow-lg rounded py-4 mx-4">
            <TitleSection boldText="Daftar" subtitle="Produk" />

            <Table className="px-4">
                <TableHeader>
                    <TableData>ID</TableData>
                    <TableData>Produk</TableData>
                    <TableData>Harga (Rp)</TableData>
                    <TableData className="hidden md:flex">Kategori</TableData>
                    <TableData className="hidden md:flex">Diskon (%)</TableData>
                    <TableData className="hidden md:flex">
                        Stok Barang
                    </TableData>
                    <TableData>Aksi</TableData>
                </TableHeader>

                <TableBody>
                    {products.map((product, i) => (
                        <TableRow key={i}>
                            <TableData>{product.id}</TableData>
                            <TableData className="items-center space-x-2">
                                <img
                                    className="max-w-6 h-6 hidden md:block rounded"
                                    src={`/storage/uploads/POS/img/products/${product.image}`}
                                    alt="Product"
                                />
                                <p>{product.name}</p>
                            </TableData>
                            <TableData>{product.price}</TableData>
                            <TableData className="hidden md:flex">
                                {product.category.category_name}
                            </TableData>
                            <TableData className="hidden md:flex">
                                {product.discount ? product.discount : 0}
                            </TableData>
                            <TableData className="hidden md:flex">
                                {product.stock ? product.stock : 0}
                            </TableData>
                            <TableData className="flex space-x-4 min-w-20">
                                <ActionableIcon
                                    className="text-primary"
                                    icon={FaEdit}
                                    size={16}
                                    href={route("product.edit", product.id)}
                                />
                                <ActionableIcon
                                    onClick={(e) => {
                                        handleDelete(e, product.id);
                                    }}
                                    className="text-red-500"
                                    icon={RiDeleteBinFill}
                                    size={16}
                                />
                                <ActionableIcon
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleModal(product);
                                    }}
                                    className="sm:hidden"
                                    icon={TbChevronsUpRight}
                                    size={16}
                                />
                            </TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <ProductModal open={open} data={data} onClose={handleModal} />
        </div>
    );
};

const ProductModal = ({ open, data, onClose }) => {
    return (
        <Modal
            show={open}
            onClose={onClose.bind(this, data)}
            maxWidth="sm"
            className="md:hidden"
        >
            <div className="flex flex-col w-full min-w-80 px-4 py-5 gap-4">
                <div className="flex justify-between items-center w-full">
                    <h1>
                        <span className="font-bold">Detail</span> Produk
                    </h1>
                    <IoMdClose
                        className="cursor-pointer"
                        size={24}
                        onClick={() => onClose(data)}
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
                    <span className="font-bold">ID:</span> {data?.id}
                </p>
                <hr />
                <p className="text-xs text-center">
                    <span className="font-bold">Produk:</span> {data?.name}
                </p>
                <hr />
                <p className="text-xs text-center">
                    <span className="font-bold">Harga:</span> {data?.price}
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
    );
};
export default ProductTable;
