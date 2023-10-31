
import React, { useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View>
        <Button title="Incrementar" onPress={() => {
         setContador(contador + 1);
        }} />
        <Button title="Decrementar" onPress={() => {
        setContador(contador - 1);
        }}/>
        <Text>Contador: {contador}</Text>
    </View>
  );

};

const styles = StyleSheet.create({

});

export default CounterScreen;