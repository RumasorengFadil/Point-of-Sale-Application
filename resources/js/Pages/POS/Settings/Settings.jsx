import { Head } from "@inertiajs/react";
import { toTitleCase } from "@/utils/toTitleCase";
import UserProfileCard from "@/Components/UserProfileCard";
import EditCashierProfileForm from "@/Organisms/EditCashierProfileForm";
import SettingsPOSMenu from "@/Organisms/SettingsPOSMenu";
import POSLayout from "@/Layouts/POSLayout";
import EditUserProfileForm from "@/Organisms/EditUserProfileForm";

export default function Settings({ auth }) {
    const { user } = auth;

    const header = (
        <>
            <Head title="User Accounts" />
        </>
    );

    const content = (
        <>
            <div className="flex bg-white rounded w-full flex-col lg:overflow-auto space-y-8 lg:py-4">
                <UserProfileCard
                    avatar={`${
                        user.image && `/storage/uploads/user/img/${user.image}`
                    }`}
                    name={toTitleCase(user.real_name)}
                    description={user.username}
                    className="px-4"
                />

                <SettingsPOSMenu />
            </div>

            <EditUserProfileForm
                routeName={`${
                    auth.guard.name === "user"
                        ? "settings.user-profile.update"
                        : "settings.cashier-profile.update"
                }`}
                user={user}
            />
            {/* {auth.guard.name === "cashier" && (
                <EditCashierProfileForm user={user} />
            )} */}
        </>
    );

    return (
        <POSLayout
            header={header}
            content={content}
            className="lg:space-x-4"
            contentClassName="py-8 lg:flex-row lg:space-x-4 lg:space-y-0"
            direction="col-reverse"
            withContainerSpace={false}
        ></POSLayout>
    );
}
