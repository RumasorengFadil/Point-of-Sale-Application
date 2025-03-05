import { ToastContainer } from "react-toastify";

export default function Guest({ children }) {
    return (
        <>
            <ToastContainer />
            <div className="min-h-screen flex">
                <div className="hidden md:flex justify-center items-center flex-1 px-6">
                    <img
                        className="w-96"
                        src="/images/app/3D/image-3.png"
                        alt=""
                    />
                </div>
                <div className="flex md:items-center justify-center px-6 py-10 flex-1">
                    {children}
                </div>
            </div>
        </>
    );
    // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
    //     <div>
    //         <Link href="/">
    //             <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
    //         </Link>
    //     </div>

    //     <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
    //         {children}
    //     </div>
    // </div>
}
