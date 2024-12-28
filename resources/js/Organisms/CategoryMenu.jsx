import React, { memo, useState } from "react";
import useCategoryStore from "@/store/useCategoryStore";
import Card from "@/Components/Card";
import { CulinaryReactIconFigure } from "@/Components/CulinaryReactIconFigure";
import { toTitleCase } from "@/utils/toTitleCase";

const CategoryMenu = memo(({categories}) => {
    const category = useCategoryStore((state) => state.category);
    const setCategory = useCategoryStore((state) => state.setCategory);
    return (
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
    );
});

export default CategoryMenu;
