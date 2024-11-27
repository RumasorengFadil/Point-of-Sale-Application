import ApplicationLogo from "@/Components/ApplicationLogoSm";
import PosLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaMoneyBill } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { BiDrink, BiFoodMenu, BiSolidDrink } from "react-icons/bi";
import ApplicationLogoSm from "@/Components/ApplicationLogo";
import BarChart from "@/Components/Chart/BarChart";
import { RiSettingsFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

export default function Dashboard({ auth }) {
    return (
        <PosLayout user={auth.user}>
            <Head title="Beranda" />

            {/* Content */}
            <div className="flex flex-col overflow-y-auto overflow-x-hidden space-y-8 flex-1 px-4 max-h-screen">
                {/* Header */}
                <div className="flex justify-between items-center h-max w-full">
                    <div className="flex items-center py-2 w-max space-x-2">
                        <Link className="lg:hidden" href="/">
                            <img
                                className="fill-current w-14"
                                src="/images/app/logo.png"
                                alt=""
                            />
                        </Link>
                        <p>
                            <span className="font-bold">28 October 2021</span>{" "}
                            Thursday | 17:30
                        </p>
                    </div>
                    <div className="cursor-pointer">
                        <img src="/icons/app/menu.svg" alt="" />
                    </div>
                </div>

                {/* stats */}
                <div className="flex gap-3  items-start  w-full text-xs | lg:text-base |">
                    {/* Stats List */}
                    <div className="flex flex-col justify-center items-stretch gap-4 h-28 rounded flex-1 px-3 py-4 text-white bg-primary">
                        <div>
                            <FaMoneyBill size={20}></FaMoneyBill>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="font-bold">1.000.000</p>
                            <p className="text-xs">Pendapatan (Rp)</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-stretch gap-4 h-28 rounded flex-1 px-3 py-4 text-white bg-primary">
                        <div>
                            <FaUser size={20}></FaUser>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="font-bold">300</p>
                            <p className="text-xs">Total Pesanan</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-stretch gap-4 h-28 rounded flex-1 px-3 py-4 text-white bg-primary">
                        <div>
                            <IoFastFood size={20}></IoFastFood>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="font-bold ">Ayam Geprek</p>
                            <p className="text-xs">Terfavorit</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-stretch gap-4 h-28 rounded flex-1 px-3 py-4 text-white bg-primary">
                        <div>
                            <BiSolidDrink size={20}></BiSolidDrink>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="font-bold">Es Tea</p>
                            <p className="text-xs">Tervaforit</p>
                        </div>
                    </div>
                </div>

                {/* Ordered Products*/}
                <div className="flex flex-col w-full h-full overflow-y-auto space-y-5 px-4 py-6 my-8 rounded shadow-lg bg-white">
                    {/* Title */}
                    <p className="font-bold">Produk Yang Dipesan</p>

                    {/* Ordered Products Header */}
                    <div className="flex w-full h-8">
                        <div className="flex w-full h-max font-bold">Item</div>
                        <div className="flex w-full h-max font-bold">
                            Pesanan
                        </div>
                        <div className="flex w-full h-max font-bold">
                            Pendapatan
                        </div>
                    </div>

                    {/* Ordered Products Lists */}
                    <div className="flex flex-col space-y-5 w-full">
                        <div className="flex flex-auto h-max justify-center items-center">
                            <div className="flex items-center space-x-2 w-full h-max">
                                <IoFastFood size={24} />
                                <p>Makanan</p>
                            </div>
                            <div className="flex w-full h-max">200</div>
                            <div className="flex w-full h-max">Rp. 800.000</div>
                        </div>
                        <hr />
                        <div className="flex flex-col space-y-2 w-full h-max">
                            <div className="flex flex-auto h-max justify-center items-center">
                                <div className="flex items-center space-x-2 w-full h-max">
                                    <BiSolidDrink size={24} />
                                    <p>Minuman</p>
                                </div>
                                <div className="flex w-full h-max">100</div>
                                <div className="flex w-full h-max">
                                    Rp. 200.000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Charts */}
            <div className="hidden lg:flex gap-8 flex-col py-4 px-4 items-start w-80 max-h-screen bg-white">
                <div className="flex w-full justify-between ">
                    <h1>
                        <span className="font-bold">Overal</span> Statistic
                    </h1>
                    {/* <IoMdSettings size={20} /> */}
                </div>

                <div className="flex gap-3 w-full">
                    <div className="flex flex-1 rounded text-xs cursor-pointer text-gray-800 shadow-md px-3 py-2 justify-center items-center">
                        Minggu Ini
                    </div>
                    <div className="flex flex-1 rounded text-xs cursor-pointer bg-gray-800 text-white shadow-md px-3 py-2 justify-center items-center">
                        Bulan Ini
                    </div>
                    <div className="flex flex-1 rounded text-xs cursor-pointer text-gray-800 shadow-md px-3 py-2 justify-center items-center">
                        Tahun Ini
                    </div>
                </div>

                <div className="flex flex-col gap-8 w-full">
                    <div className="flex w-full gap-3">
                        <IoFastFood size={20} />
                        <h1>Makanan</h1>
                    </div>
                    <BarChart />
                </div>

                <div className="flex flex-col gap-8 w-full">
                    <div className="flex w-full gap-3">
                        <BiSolidDrink size={20} />
                        <h1>Minuman</h1>
                    </div>
                    <BarChart />
                </div>
            </div>
        </PosLayout>
    );
}
