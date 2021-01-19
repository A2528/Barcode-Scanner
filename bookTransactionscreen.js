import react from 'React'
import {Text,style,TouchableOpacity,StyleSheet} from 'react-native'
import * as Permissions from 'expo-Permissions'
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class bookTransactionscreen extends react.Component{
    constructor() {
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'

        }
    }
    getCameraPermission = async()=>{
        const status = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions:status=="granted",
            buttonState: 'clicked',
            scanned: false
        })
    }
    handleBarcodeScanned = async({type,data}) => {
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }
    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions
        const scanned = this.state.scanned 
        const buttonState = this.state.buttonState 
        if (buttonState == "clicked" && hasCameraPermissions) {
            return (
                <BarCodeScanner
                on BarCodeScanned = {scanned? undefined: this.hand}
                style = {styleSheet.absoluteFillObject}/> 
            )
        }
        else if (buttonState == 'normal' ) {



        
        return (
            <View>
                <Text>
                {hasCameraPermissions == true? this.state.scannedData: "Request Camera Permission" } 
                </Text>
                <TouchableOpacity
                style={styles.button}>
                    <Text> Scan The QR Code </Text>
                </TouchableOpacity>
            </View>
        )
    }
    }
}
const styles = StyleSheet.create ({
    button: {
        backgroundColor: 'orange',
        justifyContent: 'center',

    }

})