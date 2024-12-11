import { useTransactionContext } from "@/Context/TransactionContext";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { Link } from "@inertiajs/react";
import { BiSolidDrink } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";

export default function ProductCategoryTabBar({
    categories,
    label = "Button",
}) {
    const { category, setCategory } = useTransactionContext();

    return (
        <div></div>
    );
}
