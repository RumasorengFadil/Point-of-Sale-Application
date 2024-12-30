import { Link } from "@inertiajs/react";
import Card from "../Card";
import { IconFigure } from "../IconFigure";

export default function ActionLinkCard({
    icon: Icon,
    caption = "",
    isActive = false,
    onClick = () => {},
    href = "",
}) {
    return (
        <Link href={href} onClick={onClick} className="flex-1" >
            <Card
                className={`flex-1 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                }`}
            >
                <IconFigure position="center" icon={Icon} caption={caption} />
            </Card>
        </Link>
    );
}
