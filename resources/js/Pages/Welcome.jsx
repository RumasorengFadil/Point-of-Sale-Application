import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";
import { FaUser } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="flex min-h-screen font-rubik">
                {/* Section 1 */}
                <div className="lg:flex items-center justify-center flex-col basis-2/5 space-y-16 px-10 py-10 text-white bg-primary hidden">
                    <div className="flex justify-center">
                        <img
                            className="w-80 lg:w-60"
                            src="/images/app/3D/image-1.png"
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col w-80 space-y-6">
                        <h1 className="flex justify-center text-2xl">
                            Your plan includes
                        </h1>

                        <div>
                            <ul>
                                <li className="list-disc">Free App's</li>
                                <li className="list-disc">
                                    Control your finances from anywhere
                                </li>
                                <li className="list-disc">
                                    Record your transactions
                                </li>
                                <li className="list-disc">
                                    Control your income and expenses
                                </li>
                                <li className="list-disc">
                                    Point off sell application accounting by
                                    integration
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col flex-1 justify-center py-10 space-y-20 px-4">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="bg-blue-500 p-1 rounded-md">
                            <img src="/icons/app/bee-icon.svg" alt="" />
                        </div>
                        <h1>BeePOSANDA</h1>
                    </div>

                    <div className="flex justify-center">
                        <img
                            className="w-56 lg:w-40"
                            src="/images/app/3D/image-2.png"
                            alt=""
                        />
                    </div>

                    <div  className="flex flex-col items-center space-y-3">
                        <Link href={route('login')} className="flex justify-center w-full max-w-80   rounded-2xl">
                            <PrimaryButton className="flex relative justify-center bg-primary w-full">
                                <FaUser className="absolute left-5" size={16} color="white" />
                                Log in as Owner
                            </PrimaryButton>
                        </Link>
                        <p>Or</p>
                        <Link href={route('cashier-login')} className="flex justify-center w-full max-w-80   rounded-2xl">
                            <PrimaryButton className="flex relative justify-center bg-primary w-full">
                                <FaPeopleGroup className="absolute left-5" size={20} color="white" />
                                Log in as Employer
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
