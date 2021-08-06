import React, { useContext, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { List, Text } from "react-native-paper";

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
        return (<CardUser user={item} navigation={navigation} />)
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
                    : <Text style={{ color: "red", textAlign: 'center' }}>No hay clientes registrado</Text>
                }
            </List.Section>
        </View>
    )
}

export default ListUsers;

