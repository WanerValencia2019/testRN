import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { List } from "react-native-paper";

import { userContext } from "./../../context/context";
import CardUser from "./../../components/CardUser";

import styles from "./styles";

function ListUsers(props) {
    const { navigation } = props;
    const { getUsers, users } = useContext(userContext);

    useEffect(() => {
        (async () => await getUsers())();
    }, [])

    const renderUser = ({ item }) => {
        return (<CardUser id={item.id} name={item.name} email={item.email} navigation={navigation} />)
    }

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Subheader style={styles.subHeader}>Clientes</List.Subheader>
                {users.length > 0
                    ?
                    <FlatList
                        data={users}
                        renderItem={renderUser}
                        keyExtractor={item => item.id}
                    />
                    : <Text style={{ color: "red" }}>No hay usuarios registrado</Text>
                }
            </List.Section>
        </View>
    )
}

export default ListUsers;

