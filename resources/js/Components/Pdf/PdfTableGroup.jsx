import { View } from "@react-pdf/renderer";

const PdfTableGroup = ({ style={}, children }) => {
    const defaultStyle = {
        width: "1400px",
        textAlign: "left"
    };

    const combinedStyle = { ...defaultStyle, ...style };

    return <View style={combinedStyle}>{children}</View>;
};

export default PdfTableGroup;
