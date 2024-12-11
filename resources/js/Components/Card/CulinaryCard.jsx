import Card from "../Card";
import { CulinaryReactIconFigure } from "../CulinaryReactIconFigure";

export default function CulinaryCard({ className = "", children, ...props }) {
    return (
        <Card
            key={productCategory.id}
            onClick={() => setCategory(productCategory.category_name)}
            className={`h-20 w-full lg:w-20 ${
                category === productCategory.category_name
                    ? "bg-primary"
                    : "bg-white"
            }`}
        >
            <CulinaryReactIconFigure
                reactIcon={productCategory.category_name}
                figCaption={productCategory.category_name}
                className="items-center"
                isSelected={category === productCategory.category_name}
                classNameIfTrue="text-white"
            />
        </Card>
    );
}
