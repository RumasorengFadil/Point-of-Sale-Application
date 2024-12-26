import { Head } from "@inertiajs/react";
import StatsOverview from "@/Organisms/StatsOverview";
import HeaderLogo from "@/Organisms/HeaderLogo";
import NavigationMenu from "@/Organisms/NavigationMenu";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import InfoBar from "@/Organisms/InfoBar";
import OrderSummary from "@/Organisms/OrderSummary ";
import SidebarStatistics from "@/Organisms/SidebarStatistics";

export default function Dashboard({ analytics }) {
    const header = (
        <>
            <Head title="Laporan Transaksi" />

            <HeaderLogo />

            <NavigationMenu />
        </>
    );
    const content = (
        <>
            <InfoBar />

            <StatsOverview analytics={analytics} />

            <OrderSummary analytics={analytics} />
        </>
    );

    const footer = (
        <>
           <SidebarStatistics analytics={analytics}  />
        </>
    );
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer = {footer}
            footerClassName = "hidden lg:flex"
            direction="col-reverse"
        ></ApplicationLayout>
    );
}
// export default function Dashboard({ auth, analytics }) {
//     return (
//         <PosLayout user={auth.user}>
//             <Head title="Beranda" />

//             {/* Content */}
//             <div className="flex flex-col overflow-y-auto overflow-x-hidden space-y-8 flex-1 px-4 max-h-screen">
//                 {/* Header */}
// <div className="flex justify-between items-center h-max w-full">
//     <div className="flex items-center py-2 w-max space-x-2">
//         <Link className="lg:hidden" href="/">
//             <img
//                 className="fill-current w-14"
//                 src="/images/app/logo.png"
//                 alt=""
//             />
//         </Link>
//         <p>
//             <span className="font-bold">28 October 2021</span>{" "}
//             Thursday | 17:30
//         </p>
//     </div>
//     <Link
//         href={route("transaction.index")}
//         className="cursor-pointer"
//     >
//         <img src="/icons/app/menu.svg" alt="" />
//     </Link>
// </div>

//                 {/* stats */}
//                 <StatsOverview analytics={analytics} />

//                 {/* Ordered Products*/}
//     <div className="flex flex-col w-full h-full overflow-y-auto space-y-5 px-4 py-6 my-8 rounded shadow-lg bg-white">
//         {/* Title */}
//         <p className="font-bold">Produk Yang Dipesan</p>

//         {/* Ordered Products Header */}
//         <div className="flex w-full h-8">
//             <div className="flex w-full h-max font-bold">Item</div>
//             <div className="flex w-full h-max font-bold">
//                 Pesanan
//             </div>
//             <div className="flex w-full h-max font-bold">
//                 Pendapatan
//             </div>
//         </div>

//         {/* Ordered Products Lists */}
//         <div className="flex flex-col space-y-5 w-full">
//             <div className="flex flex-auto h-max justify-center items-center">
//                 <div className="flex items-center space-x-2 w-full h-max">
//                     <IoFastFood size={24} />
//                     <p>Makanan</p>
//                 </div>
//                 <div className="flex w-full h-max">200</div>
//                 <div className="flex w-full h-max">Rp. 800.000</div>
//             </div>
//             <hr />
//             <div className="flex flex-col space-y-2 w-full h-max">
//                 <div className="flex flex-auto h-max justify-center items-center">
//                     <div className="flex items-center space-x-2 w-full h-max">
//                         <BiSolidDrink size={24} />
//                         <p>Minuman</p>
//                     </div>
//                     <div className="flex w-full h-max">100</div>
//                     <div className="flex w-full h-max">
//                         Rp. 200.000
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//             {/* Charts */}
// <div className="hidden lg:flex gap-8 flex-col py-4 px-4 items-start w-80 max-h-screen bg-white">
//     <div className="flex w-full justify-between ">
//         <h1>
//             <span className="font-bold">Overal</span> Statistic
//         </h1>
//         {/* <IoMdSettings size={20} /> */}
//     </div>

//     <div className="flex gap-3 w-full">
//         <div className="flex flex-1 rounded text-xs cursor-pointer text-gray-800 shadow-md px-3 py-2 justify-center items-center">
//             Minggu Ini
//         </div>
//         <div className="flex flex-1 rounded text-xs cursor-pointer bg-gray-800 text-white shadow-md px-3 py-2 justify-center items-center">
//             Bulan Ini
//         </div>
//         <div className="flex flex-1 rounded text-xs cursor-pointer text-gray-800 shadow-md px-3 py-2 justify-center items-center">
//             Tahun Ini
//         </div>
//     </div>

//     <div className="flex flex-col gap-8 w-full">
//         <div className="flex w-full gap-3">
//             <IoFastFood size={20} />
//             <h1>Makanan</h1>
//         </div>
//         <BarChart />
//     </div>

//     <div className="flex flex-col gap-8 w-full">
//         <div className="flex w-full gap-3">
//             <BiSolidDrink size={20} />
//             <h1>Minuman</h1>
//         </div>
//         <BarChart />
//     </div>
// </div>
//         </PosLayout>
//     );
// }
