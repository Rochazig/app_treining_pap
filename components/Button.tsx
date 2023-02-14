import { View, StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from "react-native";

type CallBackOnPress = (e: GestureResponderEvent) => void;

interface IButtonAppData {
    title: string;
    onPress?: CallBackOnPress
}

const Button = ({ onPress, title }: IButtonAppData) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#111",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default Button