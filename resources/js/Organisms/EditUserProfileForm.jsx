import BrowseButton from "@/Components/BrowseButton";
import { toTitleCase } from "@/utils/toTitleCase";
import UserProfileCard from "@/Components/UserProfileCard";
import FormField from "@/Components/FormField/FormField";
import FormActions from "@/Components/FormActions/FormActions";
import { useForm } from "@inertiajs/react";
import { useImagePreview } from "@/hooks/useImagePreview";
import withLoading from "@/Components/WithLoading";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";
import toastUtils from "@/utils/toastUtils";

const EditUserProfileForm = ({ user }) => {
    const { setData, data, post, processing } = useForm({
        realName: user.real_name,
        username: user.username,
        phoneNumber: user.phone_number,
        email: user.email,
        password: "",
        confirmPassword: "",
        image: "",
    });

    const FormActionsWithLoading = withLoading({ SpinnerWithLabel })(
        FormActions
    );

    const { imagePreview, handleFileChange } = useImagePreview(
        user.image ? `/storage/uploads/POS/img/users/${user.image}` : ""
    ); // State untuk menyimpan Data URL

    const submit = (e) => {
        e.preventDefault();

        post(route("settings.user-profile.update"), {
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
        <div className="flex w-full flex-col bg-white lg:py-4 lg:overflow-auto rounded">
            <div className="flex flex-col px-4 space-y-5">
                <FormField
                    onChange={handleChange}
                    name="realName"
                    label="Nama Asli"
                    type="text"
                    placeholder="Nama Asli"
                    value={data.realName}
                />
                <FormField
                    onChange={handleChange}
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="Username"
                    value={data.username}
                />
                <FormField
                    onChange={handleChange}
                    name="phoneNumber"
                    label="No Telp"
                    type="text"
                    placeholder="No Telp"
                    value={data.phoneNumber}
                />
                <FormField
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={data.email}
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
                <FormActionsWithLoading
                    isLoading={processing}
                    onSave={submit}
                />
            </div>
        </div>
    );
};

export default EditUserProfileForm;
