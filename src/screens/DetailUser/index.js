import React, { useContext, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native';

import { Text, Appbar } from "react-native-paper";


import { userContext } from "./../../context/context";

export default function DetailUser(props) {
    const { navigation, route } = props;
    const { params: { id } } = route;

    const [user, setUser] = useState(null);
    const { users } = useContext(userContext);

    useEffect(() => {
        setUser((users.filter((u) => u.id == id))[0])
    }, [])
    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
            </Appbar.Header>
            <View style={styles.content}>
                {user ?
                    <View>

                    </View>
                    : <Text>Cargando....</Text>
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
