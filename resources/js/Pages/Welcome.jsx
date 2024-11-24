import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="flex">
                <div className="hidden sm:block">
                    <img src="" alt="" />

                    <div>
                        <h1>Your plan includes</h1>

                        <div>
                            <ul>
                                <li>Free App's</li>
                                <li>Control your finances from anywhere</li>
                                <li>Record your transactions</li>
                                <li>Control your income and expenses</li>
                                <li>
                                    Point off sell application accounting by
                                    integration
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-x-32 justify-center">
                    <div className="flex flex-1 justify-center space-x-2">
                        <div className="bg-blue-500 rounded-md">
                            <img src="/icons/app/bee-icon.svg" alt="" />
                        </div>
                        <h1>BeePOSANDA</h1>
                    </div>

                    <div>
                        <img src="/images/app/3D/image-2.png" alt="" />
                    </div>

                    <div>
                        <PrimaryButton>Log in as Owner</PrimaryButton>
                        Or
                        <PrimaryButton>Log in as Employer</PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
}
