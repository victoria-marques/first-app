
//  * ============================================
//  * EXERCÍCIO — Componente de Recados
//  * ============================================

import { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Recados() {
    // TODO 1 — Crie um estado para o texto que está sendo digitado
    // Dica: valor inicial é uma string vazia ''

    const [digitado, setDigitado] = useState('')

    // TODO 2 — Crie um estado para o recado que foi enviado
    // Dica: valor inicial é uma string vazia ''

    const [enviado, setEnviado] = useState('')


    // TODO 3 — Crie a função handleEnviar
    // Ela deve:
    //   - Atualizar o recado enviado com o texto atual
    //   - Limpar o campo de texto (setar texto para '')
    function handleEnviar() {
        setEnviado(digitado)
        setDigitado('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>📝 Recados</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite sua mensagem"
                keyboardType="mensagem-address"
                returnKeyType='next'
                onSubmitEditing={() => digitado.current?.focus()}
                value={digitado}
                onChangeText={digitado => setDigitado(digitado)}
            />

            <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
                <Text style={styles.botaoTexto}>Enviar</Text>
            </TouchableOpacity>


            {enviado != '' && (<Text style={styles.resultado}>Recado enviado {enviado}</Text>)}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 12,
    },
    botao: {
        backgroundColor: '#cc0000',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultado: {
        marginTop: 24,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#cc0000',
    },
    label: {
        fontSize: 12,
        color: '#888888',
        marginBottom: 4,
    },
    recado: {
        fontSize: 18,
        color: '#222222',
    },
});