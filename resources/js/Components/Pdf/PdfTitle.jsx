import { Text } from "@react-pdf/renderer";

const PdfTitle = ({ children }) => {
    const style = {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 24,
    };

    return <Text style={style}>{children}</Text>;
};

export default PdfTitle;
