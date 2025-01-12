import { memo } from "react";
import PrimaryButton from "../PrimaryButton";

export default memo(function FormActions({
    className = "",
    onSave,
    onDeactivate,
    onStatusChange,
    onBack,
    onEdit,
    onSearch,
    icon:Icon,
}) {
    return (
        <div className={"flex bg-light-gray " + className}>
            {onStatusChange && (
                <PrimaryButton
                    onClick={(e) => onStatusChange.callback(e)}
                    className={`cursor-pointer mx-1 ${!onStatusChange.status?"bg-green-500":"bg-red-500"} hover:bg-gray-700`}
                >
                    {!onStatusChange.status?"Aktifkan":"Berhentikan"}
                </PrimaryButton>
            )}
            {onDeactivate && (
                <PrimaryButton
                    onClick={(e) => onDeactivate(e)}
                    className="cursor-pointer mx-1 bg-red-500 hover:bg-gray-700"
                >
                    Berhentikan
                </PrimaryButton>
            )}
            {onBack && (
                <PrimaryButton
                    onClick={(e) => onBack(e)}
                    className="cursor-pointer mx-1 bg-shadow-blue hover:bg-gray-700"
                >
                    Kembali
                </PrimaryButton>
            )}
            {onEdit && (
                <PrimaryButton
                    onClick={(e) => onEdit(e)}
                    className="cursor-pointer mx-1 bg-primary hover:bg-gray-700"
                >
                    {Icon ? <Icon size={24} />:"Edit"}
                </PrimaryButton>
            )}

            {/* <PrimaryButton className="cursor-pointer mx-1 bg-shadow-blue hover:bg-gray-700">Edit</PrimaryButton> */}

            {onSave && (
                <PrimaryButton
                    type="button"
                    onClick={(e) => onSave(e)}
                    className="justify-center py-3 cursor-pointer w-full bg-primary hover:bg-gray-700"
                >
                    Simpan
                </PrimaryButton>
            )}
            {onSearch && (
                <PrimaryButton
                    type="button"
                    onClick={(e) => onSearch(e)}
                    className="justify-center cursor-pointer w-full bg-primary hover:bg-gray-700"
                >
                    Cari
                </PrimaryButton>
            )}
        </div>
    );
});
