import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialState = {
  username: "",
  password: "",
};

const validationSchema = () => {
  return {
    username: Yup.string().required("User Name is Required"),
    password: Yup.string().required("Password is Required"),
  };
};

const LoginForm = () => {
  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (e) => console.log("Submitted Form", e),
  });
  return (
    <ScrollView>
      <Text style={styles.title}>LogIn</Text>
      <TextInput
        placeholder="User Name"
        style={styles.input}
        autoCapitalize="none"
        value={values.username}
        onChangeText={(text) => setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={values.password}
        onChangeText={(text) => setFieldValue("password", text)}
      />
      <Button title="Login" onPress={handleSubmit} />
      <Text style={styles.error}>{errors.username}</Text>
      <Text style={styles.error}>{errors.password}</Text>
    </ScrollView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
