import { Page } from "@react-pdf/renderer";

const PdfTablePage = ({ children }) => {
    const style = {
        padding: 20,
        fontSize: 10,
        fontFamily: "Helvetica",
    };

    return <Page style={style}>{children}</Page>;
};

export default PdfTablePage;
