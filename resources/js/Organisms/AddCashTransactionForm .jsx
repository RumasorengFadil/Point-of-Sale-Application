import FormActions from "@/Components/FormActions/FormActions";
import FormField from "@/Components/FormField/FormField";
import { FormImageField } from "@/Components/FormImageField/FormImageField";
import { FormOptionField } from "@/Components/FormOptionField";
import { FormSelectField } from "@/Components/FormSelectField/FormSelectField";
import PrimaryButton from "@/Components/PrimaryButton";
import TitleSection from "@/Components/SectionTitle";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";
import withLoading from "@/Components/WithLoading";
import useFormHandler from "@/hooks/useFormHandler";
import { useImagePreview } from "@/hooks/useImagePreview";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
import toastUtils from "@/utils/toastUtils";
import { toTitleCase } from "@/utils/toTitleCase";
import { useForm } from "@inertiajs/react";

export default function AddCashTransactionForm({
    journalCategories,
    journalTypes,
    routeName = "",
    formTitle = "",
    journalEntry = {},
}) {
    const { imagePreview, handleFileChange, setImagePreview } =
        useImagePreview();

    const { post, processing, data, setData, errors, reset } = useForm({
        categoryId: journalEntry.category_id || "",
        typeId: journalEntry.type_id || "",
        inputDate: journalEntry.input_date || "",
        nominal: journalEntry.nominal ?? "",
        description: journalEntry.description || "",
        evidence: "",
    });
    const { handleChange, handleNumberChange } = useFormHandler(data, setData);

    const ActionWithLoading = withLoading({ SpinnerWithLabel })(FormActions);
    const url = journalEntry.id
        ? route("accounting-journal-entry.update", journalEntry.id)
        : route("accounting-journal-entry.store");

    const submit = (e) => {
        e.preventDefault();
        post(url, {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);

                if (!isObjectEmpty(journalEntry)) return;

                reset();
                setImagePreview("");
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    return (
        <div className="flex flex-col space-y-4">
            <TitleSection boldText={formTitle} subtitle="Kas" />

            <FormSelectField
                onChange={handleChange}
                name="typeId"
                label="Jenis Transaksi*"
                value={data.typeId}
                error={errors.typeId}
                className="px-4"
            >
                <FormOptionField value="" label="Pilih" />
                {journalTypes.map((journalType, i) => (
                    <FormOptionField
                        value={journalType.id}
                        key={i}
                        label={toTitleCase(journalType.type_name)}
                    />
                ))}
            </FormSelectField>

            <FormSelectField
                onChange={handleChange}
                name="categoryId"
                label="Kategori Transaksi*"
                value={data.categoryId}
                error={errors.categoryId}
                className="px-4"
            >
                <FormOptionField value="" label="Pilih" />
                {journalCategories.map((journalCategory, i) => (
                    <FormOptionField
                        value={journalCategory.id}
                        key={i}
                        label={toTitleCase(journalCategory.category_name)}
                    />
                ))}
            </FormSelectField>

            <FormField
                onChange={handleChange}
                name="inputDate"
                label="Tanggal Transaksi*"
                type="date"
                value={data.inputDate}
                error={errors.inputDate}
                className="px-4"
            />
            <FormField
                onChange={(e) => handleNumberChange(e, 11)}
                label="Nominal*"
                type="text"
                name="nominal"
                value={formatNumberWithDots(data.nominal)}
                error={errors.nominal}
                className="px-4"
            />
            <FormField
                onChange={handleChange}
                name="description"
                placeholder="exp : Pembelian bahan baku"
                label="Deskripsi Transaksi*"
                type="text"
                value={data.description}
                error={errors.description}
                className="px-4"
            />
            <FormImageField
                onChange={(e) =>
                    handleFileChange(e, (file) => setData("evidence", file))
                }
                label="Bukti Transaksi"
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
                    Batal
                </PrimaryButton>
            </div>
        </div>
    );
}
