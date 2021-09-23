import { StyleSheet } from "react-native";
export const listColors = {
    white: '#ffffff',
    primary: '#192a56'
}

export const colors = StyleSheet.create({
    white: {
        color: listColors.white,
    }
})


export const fontSizes = StyleSheet.create({
    f30: {
        fontSize: 30,
    }
})


export const font = StyleSheet.create({
    center: {
        textAlign: 'center'
    }
})


export const styles = StyleSheet.create({
    SubmitButtonStyle: {
        marginTop: 10,
        paddingTop: 20,
        padding: 20,
        width: 90,
        paddingBottom: 20,
        backgroundColor: '#273c75',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    },

})