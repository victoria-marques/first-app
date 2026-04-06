import {View, Text} from "react-native"

export default function CardUsuario({nome, email}) {
    return(
        <View>
            <Text>{nome} - {email} informações</Text>
        </View>
    )
}