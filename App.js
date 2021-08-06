import React from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import InitialNavigation from "./src/navigation";
import UserProvider from "./src/context/Provider";

export default function App() {
  return (
    <PaperProvider>
      <UserProvider>
        <InitialNavigation />
      </UserProvider>
    </PaperProvider>
  );
}

