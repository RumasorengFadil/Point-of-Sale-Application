import Card from "@/Components/Card";
import { ReactIconFigure } from "@/Components/ReactIconFigure";
import { memo } from "react";
import { FaMoneyBill } from "react-icons/fa";

export default memo(function PaymentMethod({  }) {
    return (
        <div className="flex flex-col gap-8 px-4  bg-white w-full">
            <div className="font-bold hidden lg:block">Payment</div>
            <div className="flex space-x-5">
                <Card className="w-full bg-primary">
                    <ReactIconFigure
                        figCaption="Cash"
                        className="items-center text-center text-white"
                        captionSize="sm"
                        reactIcon={<FaMoneyBill size={24} />}
                    />
                </Card>
                <Card className="w-full bg-gray-400 justify-center">
                    <ReactIconFigure
                        figCaption="Cooming Soon"
                        className="items-center text-center text-white"
                        captionSize="sm"
                    />
                </Card>
                <Card className="w-full  bg-gray-400 justify-center">
                    <ReactIconFigure
                        figCaption="Cooming Soon"
                        className="items-center text-center text-white"
                        captionSize="sm"
                    />
                </Card>
            </div>
        </div>
    );
});
