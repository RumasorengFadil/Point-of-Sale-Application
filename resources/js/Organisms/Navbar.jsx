import { Link } from "@inertiajs/react";
import BackBtn from "@/Components/BackBtn";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { CulinaryReactIconFigure } from "@/Components/CulinaryReactIconFigure";
import useCategoryStore from "@/store/useCategoryStore";

export default function Navbar({
    backBtn = false,
    categories,
    title = "Kembali",
}) {
    const category = useCategoryStore((state) => state.category);
    const setCategory = useCategoryStore((state) => state.setCategory);

    return (
        <div className="flex flex-col w-full bg-white py-4 space-y-4 | lg:static lg:w-36 lg:bg-gray-100 lg:overflow-auto |">
            {backBtn && <BackBtn title={title} />}

            {/* Logo */}
            <div className="hidden lg:flex justify-center">
                <Link href="/">
                    <ApplicationLogo className="w-24" />
                </Link>
            </div>

            {/* Sidebar List */}
            <div className="flex flex-row lg:flex-col px-4 gap-5 items-center">
                {categories.map((productCategory) => (
                    <div
                        key={productCategory.id}
                        onClick={() =>
                            setCategory(productCategory.category_name)
                        }
                        className={`flex flex-col cursor-pointer w-full shadow-md | lg:w-20 lg:shadow-none | h-20 rounded space-y-2 items-center justify-center p-2 ${
                            category === productCategory.category_name
                                ? "bg-primary"
                                : "bg-white"
                        }`}
                    >
                        <CulinaryReactIconFigure
                            reactIcon={productCategory.category_name}
                            figCaption={productCategory.category_name}
                            className="items-center"
                            isSelected={
                                category === productCategory.category_name
                            }
                            classNameIfTrue="text-white"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
