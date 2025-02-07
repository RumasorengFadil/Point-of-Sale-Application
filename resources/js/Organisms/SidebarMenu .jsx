import SidebarItem from "@/Components/SidebarItem/SidebarItem";
import UserProfileCard from "@/Components/UserProfileCard";
import { HiSwitchHorizontal } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoCloseOutline, IoLogOut } from "react-icons/io5";

const SidebarMenu = ({ onClose }) => {
    return (
      <div className="flex flex-col space-y-4 bg-white h-full fixed top-0 py-4 shadow-lg rounded-xl -translate-x-full transition-all">
        {/* Header Sidebar */}
        <div className="flex items-center justify-between px-4 space-x-16">
          <UserProfileCard size="sm" name="Fania" description="Rumasoreng" />
          <IoCloseOutline className="cursor-pointer" size={24} onClick={onClose} />
        </div>
  
        {/* Menu Sidebar */}
        <div className="flex flex-col px-4">
          <div className="flex flex-col py-1">
            <SidebarItem
              label="Accounting"
              icon={HiSwitchHorizontal}
              href={route("pos-settings.index")}
              className="hover:bg-gray-300 transition-all rounded-md px-2"
              bar={false}
            />
          </div>
          <hr />
          <div className="flex flex-col py-1">
            <SidebarItem
              label="Pengaturan"
              icon={IoMdSettings}
              href={route("pos-settings.index")}
              className="hover:bg-gray-300 transition-all rounded-md px-2"
              bar={false}
            />
          </div>
          <hr />
          <div className="flex flex-col py-1">
            <SidebarItem
              label="Keluar"
              icon={IoLogOut}
              href={route("pos-settings.index")}
              className="hover:bg-gray-300 transition-all rounded-md px-2"
              bar={false}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default SidebarMenu;
  