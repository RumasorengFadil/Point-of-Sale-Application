import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import NavigationMenu from "@/Organisms/NavigationMenu";
import { toTitleCase } from "@/utils/toTitleCase";
import SidebarMenu from "@/Organisms/SidebarMenu";
import EditUserProfileForm from "@/Organisms/EditUserProfileForm";
import UserProfileCard from "@/Components/UserProfileCard";

export default function UserProfile({ auth }) {
    const { user } = auth;

    const header = (
        <>
            <Head title="User Accounts" />

            <HeaderLogo />

            <NavigationMenu />
        </>
    );

    const content = (
        <>
            <div className="flex bg-white rounded w-full flex-col lg:overflow-auto space-y-8 lg:py-4">
                <UserProfileCard
                    avatar={`/storage/uploads/POS/img/users/${user.image}`}
                    name={toTitleCase(user.username)}
                    description={user.real_name}
                    className="px-4"
                />

                <SidebarMenu />
            </div>
            
            <EditUserProfileForm user={user} />
        </>
    );

    const footer = <></>;
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            className="space-y-0 lg:space-x-4"
            contentClassName="py-8 lg:flex-row lg:space-x-4 lg:space-y-0"
            direction="col-reverse"
        ></ApplicationLayout>
    );
}
