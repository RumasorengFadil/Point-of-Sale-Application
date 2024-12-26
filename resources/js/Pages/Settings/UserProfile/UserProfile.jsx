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
            <UserProfileCard
                name={toTitleCase(user.username)}
                description={user.real_name}
                className="px-4"
            />

            <SidebarMenu />
        </>
    );

    const footer = (
        <>
            <EditUserProfileForm user = {user} />
        </>
    );
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            className="lg:space-x-4"
            contentClassName="bg-white flex-0"
            footerClassName="hidden lg:flex-1 lg:flex"
            direction="col-reverse"
        ></ApplicationLayout>
    );
}
