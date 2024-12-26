import InputError from "../InputError";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";

export default function FormField({
    className = "",
    type = "text",
    placeholder,
    label = "Label",
    error,
    isFocused = false,
    ...props
}) {
    return (
        <div className={"flex flex-col space-y-2 " + className}>
            <InputLabel value={label} />
            <TextInput
                {...props}
                type={type}
                placeholder={placeholder}
                className="bg-gray-100"
                isFocused={isFocused}
            />
            <InputError message={error} />
        </div>
    );
}
