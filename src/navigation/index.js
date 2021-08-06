import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListUsers from "../screens/ListUsers";
import DetailUser from "../screens/DetailUser";


const stack = createStackNavigator();



const UsersStack = () => {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="list">
            <stack.Screen name="list" component={ListUsers} />
            <stack.Screen name="detail" component={DetailUser} />
        </stack.Navigator>
    );
}


export default App = () => {
    return (
        <NavigationContainer>
            <UsersStack />
        </NavigationContainer>
    );
}