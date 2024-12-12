import { Link } from "@inertiajs/react";
import BackBtn from "@/Components/BackBtn";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { CulinaryReactIconFigure } from "@/Components/CulinaryReactIconFigure";
import useCategoryStore from "@/store/useCategoryStore";
import Card from "@/Components/Card";
import { toTitleCase } from "@/utils/toTitleCase";

export default function Navbar({ backBtn = false, categories }) {
    const category = useCategoryStore((state) => state.category);
    const setCategory = useCategoryStore((state) => state.setCategory);

    return (
        <div className="flex flex-col w-full  space-y-4 | lg:static lg:w-36 lg:bg-gray-100 lg:overflow-auto |">
            {backBtn && (
                <BackBtn
                    className="px-4"
                    onClick={() => window.history.back()}
                />
            )}

            {/* Logo */}
            <div className="hidden lg:flex justify-center">
                <Link href="/">
                    <ApplicationLogo className="w-24" />
                </Link>
            </div>

            {/* Sidebar List */}
            <div className="flex flex-row lg:flex-col px-4 gap-5 items-center">
                {categories.map((productCategory) => (
                    <Card
                        key={productCategory.id}
                        onClick={() =>
                            setCategory(productCategory.category_name)
                        }
                        className={`h-20 w-full lg:w-20 ${
                            category === productCategory.category_name
                                ? "bg-primary"
                                : "bg-white"
                        }`}
                    >
                        <CulinaryReactIconFigure
                            reactIcon={productCategory.category_name}
                            figCaption={toTitleCase(
                                productCategory.category_name
                            )}
                            className="items-center"
                            isSelected={
                                category === productCategory.category_name
                            }
                            classNameIfTrue="text-white"
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
}
