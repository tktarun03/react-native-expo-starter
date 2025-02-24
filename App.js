import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to React Native Expo Starter!</Text>
            <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 18, marginBottom: 10 }
});