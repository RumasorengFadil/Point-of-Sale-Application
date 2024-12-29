import Card from "../Card";
import { IconFigure } from "../IconFigure";

export default function ActionCard({ icon: Icon, caption, isActive = false }) {
    return (
        <Card
            className={`flex-1 ${
                isActive ? "bg-primary text-white" : "bg-white"
            }`}
        >
            <IconFigure position="center" icon={Icon} caption={caption} />
        </Card>
    );
}
