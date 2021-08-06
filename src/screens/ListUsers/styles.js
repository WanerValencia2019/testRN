import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");
export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        marginTop: 24,
        backgroundColor: 'white'
    },
    subHeader: {
        fontSize: width * 0.07,
        textAlign: 'center'
    }
})
