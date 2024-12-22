import { View } from "@react-pdf/renderer";

const PdfTableHeader = ({ children }) => {
    const style = {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "black",
        paddingBottom: 5,
        marginBottom: 5,
    };

    return <View style={style}>{children}</View>;
};

export default PdfTableHeader;
