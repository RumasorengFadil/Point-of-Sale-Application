import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { BsBoxFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TopBar from "@/Components/TopBar";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { FaMountainSun } from "react-icons/fa6";
import PrimaryButton from "@/Components/PrimaryButton";
import toastUtils from "@/utils/toastUtils";
import { useImagePreview } from "@/hooks/useImagePreview";
import { toTitleCase } from "@/utils/toTitleCase";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { convertToNumber } from "@/utils/convertToNumber";

export default function CreateProduct({ auth, categories }) {
    const { imagePreview, handleFileChange } = useImagePreview(); // State untuk menyimpan Data URL

    const { post, data, setData, errors, reset } = useForm({
        name: "",
        categoryId: "",
        price: "",
        discount: "",
        stock: "",
        image: "",
    });
    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handlePriceChange = (e) => {
        if (e.target.value === "") setData("price", "");

        const price = convertToNumber(e.target.value);

        if (price.toString().length > 8) return;

        if (!price) return;

        setData((prevData) => ({
            ...prevData,
            [e.target.name]: price,
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("product.store"), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
                reset();
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah Produk" />

            {/* Content */}
            <div className="flex flex-col overflow-y-auto overflow-x-hidden space-y-8 flex-1 px-4 max-h-screen">
                {/* Header */}
                <div className="flex justify-between font-bold items-center h-max w-full pt-8">
                    <h1>Invetaris</h1>
                </div>

                {/* Top Bar */}
                <TopBar
                    data={[
                        {
                            name: "product.index",
                            icon: <BsBoxFill size={20} />,
                            label: "Produk",
                        },
                        {
                            name: "product.create",
                            icon: <MdAddBox size={24} />,
                            label: "Tambah Produk",
                        },
                    ]}
                />

                {/* Ordered Products*/}
                <div className="flex flex-col w-full h-full overflow-y-auto space-y-5 px-4 py-6 my-8 rounded shadow-lg bg-white">
                    {/* Title */}
                    <p className="">
                        <span className="font-bold">Tambah</span> Produk
                    </p>

                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="name" value="Nama Produk*" />

                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="block w-full text-xs p-3 bg-gray-100"
                            autoComplete="name"
                            placeholder="Masukan Nama Produk"
                            isFocused={true}
                            onChange={handleChange}
                        />

                        <InputError message={errors.name} className="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="category" value="Kategori*" />

                        <select
                            id="categoryId"
                            name="categoryId"
                            value={data.categoryId}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block w-80 text-xs p-3 bg-gray-100"
                            type="text"
                            onChange={handleChange}
                        >
                            <option className="text-xs" value={""}>
                                Pilih
                            </option>
                            {categories.map((category, id) => (
                                <option
                                    key={id}
                                    className="text-xs"
                                    value={category.id}
                                >
                                    {toTitleCase(category.category_name)}
                                </option>
                            ))}
                        </select>

                        <InputError message={errors.categoryId} className="" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="price" value="Harga Jual (Rp)*" />

                        <TextInput
                            id="price"
                            type="text"
                            name="price"
                            value={formatNumberWithDots(data.price)}
                            className="block w-full text-xs p-3 bg-gray-100"
                            autoComplete="price"
                            placeholder="Masukan Harga Jual"
                            onChange={handlePriceChange}
                        />

                        <InputError message={errors.price} className="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="discount" value="Diskon (%)" />

                        <TextInput
                            id="discount"
                            type="number"
                            name="discount"
                            value={data.discount}
                            className="block w-full text-xs p-3 bg-gray-100"
                            autoComplete="discount"
                            placeholder="Masukan Jumlah Diskon"
                            onChange={handleChange}
                        />

                        <InputError message={errors.discount} className="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="stock" value="Stok Produk" />

                        <TextInput
                            id="stock"
                            type="number"
                            name="stock"
                            value={data.stock}
                            className="block w-full text-xs p-3 bg-gray-100"
                            autoComplete="stock"
                            placeholder="Masukan Jumlah Stok"
                            onChange={handleChange}
                        />

                        <InputError message={errors.stock} className="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="image" value="Foto Barang" />

                        <div className="flex items-center justify-between border max-w-80 rounded-md p-2">
                            <div className="flex justify-center items-center w-14 h-14 bg-gray-100 rounded-md">
                                <FaMountainSun
                                    className={`text-primary ${
                                        imagePreview ? "hidden" : ""
                                    }`}
                                    size={24}
                                />
                                <img
                                    className="rounded-md"
                                    src={imagePreview}
                                    alt=""
                                />
                            </div>

                            <label
                                htmlFor="image"
                                className="bg-primary py-2 px-4 rounded-md cursor-pointer text-white text-xs"
                            >
                                Pilih Foto
                            </label>
                            <TextInput
                                id="image"
                                type="file"
                                name="image"
                                className="hidden text-xs p-3 bg-gray-100 w-40"
                                onChange={(e) =>
                                    handleFileChange(e, (file) =>
                                        setData("image", file)
                                    )
                                }
                            />
                        </div>

                        <InputError message={errors.image} className="" />
                    </div>

                    <PrimaryButton
                        onClick={submit}
                        className="flex justify-center bg-primary max-w-80 p-3"
                    >
                        Tambah
                    </PrimaryButton>
                    {/* Ordered Products Header */}

                    {/* Ordered Products Lists */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
