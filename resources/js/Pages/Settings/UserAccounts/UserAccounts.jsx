import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import NavigationMenu from "@/Organisms/NavigationMenu";
import UserProfile from "@/Components/UserProfile";

export default function UserAccounts({}) {
    const header = (
        <>
            <Head title="User Accounts" />

            <HeaderLogo />

            <NavigationMenu />
        </>
    );

    const content = (
        <>
            <UserProfile />
        </>
    );

    const footer = <></>;
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            className="lg:space-x-4"
        ></ApplicationLayout>
    );
}
