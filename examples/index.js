import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import useInputFocus from "rn-use-input-focus";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputRefs, focus] = useInputFocus(["name", "email", "password"]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        ref={inputRefs.name}
        onSubmitEditing={() => focus("email")}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        ref={inputRefs.email}
        onSubmitEditing={() => focus("password")}
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        secureTextEntry
        ref={inputRefs.password}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});

export default App;
