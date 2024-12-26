export default function BrowseButton({ className = "", onChange }) {
    return (
        <div>
            <label
                type="submit"
                htmlFor="file-upload"
                className={"px-4 cursor-pointer rounded py-3 bg-gray-300 text-gray-800 text-sm " + className}
            >
                Browse
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
