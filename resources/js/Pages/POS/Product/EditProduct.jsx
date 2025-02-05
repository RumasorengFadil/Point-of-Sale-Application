import { Head, useForm } from "@inertiajs/react";
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
import withLoading from "@/Components/WithLoading";
import FormActions from "@/Components/FormActions/FormActions";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";

export default function EditProduct({ auth, product, categories }) {
    const { imagePreview, handleFileChange } = useImagePreview(); // State untuk menyimpan Data URL
    const ActionWithLoading = withLoading({ SpinnerWithLabel })(FormActions);

    const { post, data, setData, errors, processing } = useForm({
        name: product.name,
        categoryId: product.category.id,
        price: product.price,
        discount: product.discount,
        stock: product.stock,
        image: null,
    });
    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("product.update", product.id), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Produk" />

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
                        <span className="font-bold">Edit</span> Produk
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
                                    {category.category_name}
                                </option>
                            ))}
                        </select>

                        <InputError message={errors.categoryId} className="" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="price" value="Harga Jual*" />

                        <TextInput
                            id="price"
                            type="number"
                            name="price"
                            value={data.price}
                            className="block w-full text-xs p-3 bg-gray-100 appearance-none"
                            autoComplete="price"
                            placeholder="Masukan Harga Jual"
                            onChange={handleChange}
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
                                    src={
                                        imagePreview
                                            ? imagePreview
                                            : `/storage/uploads/POS/img/products/${product.image}`
                                    }
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

                    <div className="flex w-1/2 space-x-4">
                        <ActionWithLoading
                            isLoading={processing}
                            className="flex-auto"
                            onSave={submit}
                        />
                        <PrimaryButton
                            onClick={() => history.back()}
                            className="flex-auto bg-gray-400 text-black"
                        >
                            Cancel
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
