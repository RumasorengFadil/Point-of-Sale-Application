import Card from "../Card";
import { IconFigure } from "../IconFigure";

const StatCard = ({ icon, value, label }) => {
    return (
        <Card
            cursor="auto"
            className="justify-center h-full rounded flex-1 px-3 text-white bg-primary"
        >
            <IconFigure size="sm" className="space-y-3" icon={icon}>
                <div className="flex flex-col space-y-1">
                    <p className="font-bold">{value}</p>
                    <p className="text-xs">{label}</p>
                </div>
            </IconFigure>
        </Card>
    );
};

export default StatCard;
