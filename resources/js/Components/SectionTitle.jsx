
export default function TitleSection({ subtitle, boldText }) {
    return (
        <div className="flex px-4 w-full">
            <h1>
                <span className="font-bold">{boldText}</span> {subtitle}
            </h1>
        </div>
    );
}
