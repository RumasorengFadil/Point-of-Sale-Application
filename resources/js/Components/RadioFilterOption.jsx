export default function RadioFilterOption({ label = "label", className, ...props }) {
    return (
        <div className={"flex flex-row justify-between " + className}>
            <p>{label}</p>
            <input {...props} type="radio" />
        </div>
    );
}
