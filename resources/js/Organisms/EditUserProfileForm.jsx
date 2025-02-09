import BrowseButton from "@/Components/BrowseButton";
import { toTitleCase } from "@/utils/toTitleCase";
import UserProfileCard from "@/Components/UserProfileCard";
import FormActions from "@/Components/FormActions/FormActions";
import { useForm } from "@inertiajs/react";
import { useImagePreview } from "@/hooks/useImagePreview";
import withLoading from "@/Components/WithLoading";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";
import toastUtils from "@/utils/toastUtils";
import UserProfileFormField from "@/Components/UserProfileForm/UserProfileForm";

const EditUserProfileForm = ({ user, routeName }) => {
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
        user.image ? `/storage/uploads/user/img/${user.image}` : ""
    ); // State untuk menyimpan Data URL

    const submit = (e) => {
        e.preventDefault();
        post(route(routeName), {
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
                <UserProfileFormField data={data} handleChange={handleChange} />

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
