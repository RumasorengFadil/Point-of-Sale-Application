import FormField from "@/Components/FormField/FormField";
import { FormImageField } from "@/Components/FormImageField/FormImageField";
import { FormOptionField } from "@/Components/FormOptionField";
import { FormSelectField } from "@/Components/FormSelectField/FormSelectField";
import PrimaryButton from "@/Components/PrimaryButton";
import TitleSection from "@/Components/SectionTitle";
import withLoading from "@/Components/WithLoading";
import { toTitleCase } from "@/utils/toTitleCase";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";
import FormActions from "@/Components/FormActions/FormActions";
import { useImagePreview } from "@/hooks/useImagePreview";
import { useForm } from "@inertiajs/react";
import toastUtils from "@/utils/toastUtils";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { convertToNumber } from "@/utils/convertToNumber";

export default function ProductForm({ categories, product = {}, action }) {
    const { imagePreview, handleFileChange, setImagePreview } =
        useImagePreview(); // State untuk menyimpan Data URL

    const { post, data, setData, errors, reset, processing } = useForm({
        name: product.name || "",
        categoryId: product.category?.id || "",
        price: product.price || 0,
        discount: product.discount || 0,
        stock: product.stock || "",
        image: null,
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

        post(route(`product.${action}`, product.id ?? null), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
                setImagePreview("");
                action === "store" ? reset() : "";
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    const ActionWithLoading = withLoading({ SpinnerWithLabel })(FormActions);

    return (
        <div className="flex flex-col space-y-4">
            <TitleSection boldText="Edit" subtitle="Produk" />

            <FormField
                onChange={handleChange}
                name="name"
                label="Nama Produk"
                type="text"
                placeholder="Masukan Nama Produk"
                value={data.name}
                error={errors.name}
                className="px-4"
            />

            <FormSelectField
                onChange={handleChange}
                name="categoryId"
                label="Kategori"
                value={data.categoryId}
                error={errors.categoryId}
                className="px-4"
            >
                <FormOptionField value="" label="Pilih" />
                {categories.map((category, i) => (
                    <FormOptionField
                        value={category.id}
                        key={i}
                        label={toTitleCase(category.category_name)}
                    />
                ))}
            </FormSelectField>

            <FormField
                onChange={handlePriceChange}
                name="price"
                label="Harga Jual (Rp)*"
                placeholder="Masukan Harga Jual"
                type="text"
                value={formatNumberWithDots(data.price)}
                error={errors.price}
                className="px-4"
            ></FormField>

            <FormField
                onChange={handleChange}
                name="discount"
                label="Diskon (%)*"
                placeholder="Masukan diskon"
                type="number"
                value={data.discount}
                error={errors.discount}
                className="px-4"
                min="0"
                step="1"
            ></FormField>

            <FormField
                onChange={handleChange}
                name="stock"
                label="Stok*"
                placeholder="Masukan Harga Jual"
                type="number"
                value={data.stock}
                error={errors.stock}
                className="px-4"
                min="0"
                step="1"
            ></FormField>

            <FormImageField
                onChange={(e) =>
                    handleFileChange(e, (file) => setData("image", file))
                }
                label="Pilih Foto"
                className="px-4"
                imagePreview={imagePreview}
            />

            <div className="flex px-4 w-1/2 space-x-4">
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
    );
}
