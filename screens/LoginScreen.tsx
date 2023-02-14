import { useState } from "react"
import { GestureResponderEvent, SafeAreaView } from "react-native";
import { StyleSheet, TextInput, View, Text } from "react-native"
import Button from "../components/Button";
import Toast from "../components/Toast";


type InputsValues = {
    studentId: string;
    password: string;
}

export default function LoginScreen() {
    const [inputValues, setInputValues] = useState<InputsValues>({
        studentId: '',
        password: ''
    })

    const [message, setMessage] = useState('')

    function handlerSubmit(e: GestureResponderEvent) {
        const { studentId, password } = inputValues

        if (studentId === '' || password === '') {
            setMessage('Campos vazios')
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.card}>
                <Text style={styles.title}>Login</Text>

                <Text style={{ marginBottom: 10 }}>Numero do Aluno</Text>
                <TextInput
                    style={styles.input}
                    editable
                    onChangeText={(text) => { setInputValues((values) => ({ ...values, studentId: text })) }}
                />
                <Text style={{ marginBottom: 10 }}>Senha</Text>
                <TextInput
                    style={styles.input}
                    editable
                    onChangeText={(text) => { setInputValues((values) => ({ ...values, password: text })) }}
                />
                <Button
                    title="entrar"
                    onPress={(e) => handlerSubmit(e)}
                />

                <Text style={{ fontSize: 25, color: '#000' }}>{message}</Text>
            </SafeAreaView>
            <Toast
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#eee',
        padding: 35,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#696969'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#696969',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        width: 250,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
    }
})
