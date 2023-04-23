import React, { useContext } from "react";
import { PDFDownloadLink, Page, Text, Image, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { CartContext } from "../../../contexts/CartContext"
import { DataContext } from "../../../contexts/DataContext";
import { DataTable } from "./table";

// Create styles
const styles = StyleSheet.create({
    data: {
        fontSize: "10px",
        marginHorizontal: "20px",
        marginTop: "40px",
        gap: "15px",
        borderWidth: "1px",
        borderColor: "grey",
        paddingLeft: "10px",
        paddingTop: "10px"
    },
    title: {
        fontSize: "20px",
        alignSelf: "center"
    },
    section: {
        alignSelf: "flex-end",
    },
    page: {
        marginTop: "50px",
        backgroundColor: 'white'
    },
    prod: {
        marginLeft: "20px",
        marginTop: "20px",
        borderBottom: "1px",
        fontSize: "15px",
        marginHorizontal: "20px",
        borderBottomColor: "grey",
    },
    total: {
        marginTop: "20px",
        alignSelf: "flex-end",
        marginHorizontal: "20px"
    },
    footerText: {
        bottom: "30",
        left: "30",
        right: "0",
        top: "100",
        position: "absolute",
        fontSize:"10px"
    },
    link: {
        color: "blue"
    },
    footerDiv: {
        display: "flex",
        flexDirection: "row",
    }
});


const ordenCompra = () => {
    let min = Math.ceil(1111);
    let max = Math.floor(9999);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const orderNumber = ordenCompra()


export const GenerateReceipt = () => {

    const { cart, total } = useContext(CartContext)
    const { datos } = useContext(DataContext)
    const data = datos

    const lineJump = "\n\n"



    return (

        <div>
            <PDFDownloadLink fileName={`Factura orden #${orderNumber}`} document={<Document >
                <Page size="A4" style={styles.page}>

                    <Text style={styles.title}>
                        Factura compra orden #{orderNumber}
                    </Text>

                    <Text style={styles.data}>
                        Nombre: {data.nombre}{lineJump}
                        Dirección de facturación: {data.direccion}{lineJump}
                        Ciudad: {data.ciudad}, {data.provincia}{lineJump}
                        CP: {data.codigoPostal}{lineJump}
                    </Text>

                    {cart.map((item) => <Text style={styles.prod} key={item.id}>{item.name}  ${item.price}</Text>)}



                    <Text style={styles.total}>
                        Total: ${total}
                    </Text>


                    <View style={styles.footerDiv}>
                        <Text style={styles.footerText}>
                            Ante cualquier duda contactanos:{lineJump}
                            Telefono: 1122334455{lineJump}
                            Email: <a style={styles.link} href="mailto:mail@mail.com"><Text>mail@mail.com</Text></a>{lineJump}
                            Facebook: <a style={styles.link} href="www.Facebook.com"><Text>Geekers</Text></a>{lineJump}
                        </Text>
                    </View>





                </Page>
            </Document>}>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Descargar Factura')}
            </PDFDownloadLink>
        </div>
    )
}
