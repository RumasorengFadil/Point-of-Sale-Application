import BrowseButton from "@/Components/BrowseButton";
import { toTitleCase } from "@/utils/toTitleCase";
import UserProfileCard from "@/Components/UserProfileCard";
import FormField from "@/Components/FormField/FormField";
import FormActions from "@/Components/FormActions/FormActions";
import { useForm } from "@inertiajs/react";
import { useImagePreview } from "@/hooks/useImagePreview";
import withLoading from "@/Components/WithLoading";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";

const EditUserProfileForm = (user) => {
    const { setData, data, post, processing } = useForm({
        name: "",
        username: "",
        noTelp: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: "",
    });

    const FormActionsWithLoading = withLoading({ SpinnerWithLabel })(
        FormActions
    );

    const { imagePreview, handleFileChange } = useImagePreview(); // State untuk menyimpan Data URL

    const submit = (e) => {
        e.preventDefault();

        post(route("profile.update"), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="flex flex-col space-y-4 px-4">
            <UserProfileCard
                avatar={imagePreview}
                name={toTitleCase(user.real_name)}
                description={
                    <BrowseButton
                        onChange={(e) =>
                            handleFileChange(e, (file) =>
                                setData("image", file)
                            )
                        }
                        className="w-full"
                    />
                }
            />

            <div className="flex flex-col space-y-5">
                <FormField
                    onChange={handleChange}
                    name="name"
                    label="Nama"
                    type="text"
                    placeholder="Nama"
                />
                <FormField
                    onChange={handleChange}
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="Username"
                />
                <FormField
                    onChange={handleChange}
                    name="numberPhone"
                    label="No Telp"
                    type="text"
                    placeholder="No Telp"
                />
                <FormField
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                />
                <FormField
                    onChange={handleChange}
                    name="password"
                    label="Ganti Password"
                    type="password"
                    placeholder="Ganti Password"
                />
                <FormField
                    onChange={handleChange}
                    name="confirmPassword"
                    label="Konfirmasi Password"
                    type="password"
                    placeholder="Konfirmasi Password"
                />

                <FormActionsWithLoading
                    isLoading={processing}
                    onSave={submit}
                />
            </div>
        </div>
    );
};

export default EditUserProfileForm;
