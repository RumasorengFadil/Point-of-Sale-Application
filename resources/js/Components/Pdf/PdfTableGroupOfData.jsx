import { View } from "@react-pdf/renderer";

const PdfTableGroupOfData = ({ style = {}, children }) => {
    const defaultStyle = {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    };

    const combinedStyle = { ...defaultStyle, ...style };

    return <View style={combinedStyle}>{children}</View>;
};

export default PdfTableGroupOfData;
