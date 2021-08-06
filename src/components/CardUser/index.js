import React from 'react'
import { View, Text } from 'react-native'
import { List } from 'react-native-paper';

export default function CardUser({ id, name, email, navigation }) {
    return (
        <List.Item
            title={name}
            description={email}
            left={props => <List.Icon {...props} icon="account-box" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => navigation.navigate("detail", { id })}
        />
    )
}
