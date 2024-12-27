export default function BrowseButton({ className = "", onChange }) {
    return (
        <div className="flex flex-col">
            <label
                type="submit"
                htmlFor="file-upload"
                className={"px-6 w-max cursor-pointer rounded py-3 bg-gray-300 text-gray-800 text-sm " + className}
            >
                Pilih
            </label>

            <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={onChange}
            />
        </div>
    );
}
