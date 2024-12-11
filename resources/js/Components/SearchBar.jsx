import { FaSearch } from "react-icons/fa";
import TextInput from "./TextInput";

export default function SearchBar({
    className = "",
    onChange,
}) {
    
    return (
        <div className={"flex px-4 justify-between items-center w-full " + className}>
            <div className="flex w-full relative shadow-sm">
                <FaSearch
                    className="absolute text-gray-400 h-full left-4"
                    size={24}
                />
                <TextInput
                    className="w-full px-12 py-3 placeholder-gray-400"
                    type="text"
                    placeholder="cari"
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
