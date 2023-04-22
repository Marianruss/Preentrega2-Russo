import React, { useContext } from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { CartContext } from "../../contexts/CartContext";

// Create styles
const styles = StyleSheet.create({
    title: {
        fontSize: "20px",
        alignSelf: "center"
    },
    section: {
        backgroundColor: ""
    },
    page: {
        marginTop: "50px",
        backgroundColor: 'white'
    },
    prod: {
        marginLeft: "20px",
        marginTop:"20px"
    }
});


const ordenCompra = () => {
    let min = Math.ceil(1111);
    let max = Math.floor(9999);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const orderNumber = ordenCompra()

// Create Document Component
export const MyDocument = () => {

    const { cart } = useContext(CartContext)
    console.log(cart)

    return (
        <PDFViewer>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.title}>

                            Factura de tu compra #{orderNumber}
                        </Text>
                    </View>
                    <View style={styles.section}>

                        {cart.map((item) => <Text style={styles.prod} key={item.id}>{item.name}  ${item.price}</Text>)}


                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}


export const Test = () => (
    <PDFViewer>
        <MyDocument />
    </PDFViewer>
    // <div>
    //     <PDFDownloadLink className="p-2" document={<MyDocument />} fileName="Factura de compra.pdf">
    //         {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Descargar Factura')}
    //     </PDFDownloadLink>
    // </div>
)
