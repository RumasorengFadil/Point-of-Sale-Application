import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import withLoading from "@/Components/WithLoading";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };
    const ButtonWithLoading = withLoading({ SpinnerWithLabel })(PrimaryButton);

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div>
                <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Lupa kata sandi Anda? Tidak masalah. Cukup beri tahu kami
                    alamat email Anda dan kami akan mengirimkan tautan
                    pengaturan ulang kata sandi melalui email yang memungkinkan
                    Anda memilih kata sandi baru.
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="flex items-center justify-end mt-4">
                        <ButtonWithLoading
                            isLoading={processing}
                            className="ms-4 bg-primary"
                            disabled={processing}
                        >
                            Email Password Reset Link
                        </ButtonWithLoading>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
