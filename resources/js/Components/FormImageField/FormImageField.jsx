import { FaMountainSun } from "react-icons/fa6";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";

export const FormImageField = ({
    className,
    label = "Image Photo",
    error = "",
    imagePreview="",
    ...props
}) => {
    return (
        <div className={"flex flex-col gap-2 " + className}>
            <InputLabel htmlFor="image" value={label} />

            <div className="flex items-center justify-between border max-w-80 rounded-md p-2">
                <div className="flex justify-center items-center w-14 h-14 bg-gray-100 rounded-md">
                    <FaMountainSun
                        className={`text-primary ${
                            imagePreview ? "hidden" : ""
                        }`}
                        size={24}
                    />
                    <img className={`rounded-md w-full h-full ${imagePreview?"":"hidden"}`} src={imagePreview} alt="" />
                </div>

                <label
                    htmlFor="image"
                    className="bg-primary py-2 px-4 rounded-md cursor-pointer text-white text-xs"
                >
                    Pilih Foto
                </label>
                <TextInput
                    {...props}
                    id="image"
                    type="file"
                    name="image"
                    className="hidden text-xs p-3 bg-gray-100 w-40"
                />
            </div>

            <InputError message={error} />
        </div>
    );
};
