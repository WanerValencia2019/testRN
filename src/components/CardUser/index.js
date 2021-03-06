import React, { useState } from 'react';
import { View, } from "react-native";
import { List, Divider, Text } from 'react-native-paper';

export default function CardUser({ user, navigation }) {
    const [expanded, setExpanded] = useState(false);

    const detailUser = () => {
        return (
            <View>
                <Text style={{ marginTop: 5 }}><Text style={{ fontWeight: "bold", }}>Correo electrónico: </Text>{user.email}</Text>
                <Text style={{ marginTop: 10 }}><Text style={{ fontWeight: "bold", marginTop: 20 }}>Ciudad: </Text>{user.address.city}</Text>
                <Text style={{ marginTop: 10 }}><Text style={{ fontWeight: "bold", marginTop: 20 }}>Compañia: </Text>{user.company.name}</Text>
            </View>
        );
    }
    return (
        <List.Accordion
            title={user.name}
            description={user.email}
            style={{ backgroundColor: 'white' }}
            left={props => < List.Icon {...props} color='rgba(000,000,000,.5)' icon="account" />}
            right={props => <List.Icon {...props} icon={expanded ? "chevron-up" : "chevron-down"} />}
            expanded={expanded}
            titleStyle={{ fontWeight: expanded ? 'bold' : 'normal', color: expanded ? '#2E3E5C' : 'black' }}
            onPress={() => setExpanded(!expanded)}
        >
            <List.Item title={user.name} description={() => detailUser()} />
        </List.Accordion >
    )
}
