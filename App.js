import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  const resetCounts = () => {
    setCount(0);
    setCount2(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador em React Native</Text>
      <View style={styles.row}>
        <Text style={styles.count}>Placar 1: {count}</Text>
        <Button title="Incrementar" onPress={incrementCount} />
      </View>
      <View style={styles.row}>
        <Text style={styles.count}>Placar 2: {count2}</Text>
        <Button title="Incrementar" onPress={incrementCount2} />
      </View>
      <Button title="Zerar Placares" onPress={resetCounts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 30,
    marginBottom: 20,
    marginRight: 10,
  },
});

