import { Text } from "@react-pdf/renderer";

const PdfTableData = ({ style={}, children }) => {
    const defaultStyle = {
        width: "100%",
        textAlign: "left",
        paddingHorizontal: "4px",
        paddingVertical: "4px",
    };

    const combinedStyle = { ...defaultStyle, ...style };

    return <Text style={combinedStyle}>{children}</Text>;
};

export default PdfTableData;
