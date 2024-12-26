import { Link, useForm } from "@inertiajs/react";

const Pagination = ({ links, className, params }) => {
    const { get } = useForm(params);
    return (
        <div
            className={`flex ${className} ${
                links.length < 4 ? "hidden" : ""
            }`}
        >
            {links.map((link, index) => (
                <div
                    key={index}
                    className={`flex p-1 justify-center mx-1 rounded-md items-center ${
                        link.active ? "bg-primary text-white" : ""
                    }`}
                >
                    <Link
                        className={`px-2 text-sm `}
                        disabled={!link.url}
                        onClick={(e) => {
                            e.preventDefault();
                            get(link.url);
                        }}
                        dangerouslySetInnerHTML={{ __html: `${link.label}   ` }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Pagination;
