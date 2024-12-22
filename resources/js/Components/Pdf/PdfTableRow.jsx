import { View } from "@react-pdf/renderer";

const PdfTableRow = ({ children }) => {
    const style = {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        paddingVertical: 5,
    };
    
    return <View style={style}>{children}</View>;
};

export default PdfTableRow;
