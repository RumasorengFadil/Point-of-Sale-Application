import { View } from "@react-pdf/renderer";

const PdfTableFooter = ({ children }) => {
    const style = {
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: "black",
        textAlign: "left",
        fontSize: 12,
    };

    return <View style={style}>{children}</View>;
};

export default PdfTableFooter;
