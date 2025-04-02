import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function login() {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        icon={{ name: 'user', type: 'font-awesome' }}
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />

      <Input placeholder='E-MAIL' />

      <Input placeholder="SENHA" secureTextEntry={true} />

      <Button title="Logar" />
      <Button title="Cadastre-se" />
      <Button title="Esqueceu a senha"
        type="clear"
      />
    </View>
  );
}

function cadastro() {
  return (
    <View style={styles.container}>
      <Text>CADASTRO</Text>

      <Input placeholder='NOME' />

      <Input placeholder='E-MAIL' />

      <Input placeholder="SENHA" secureTextEntry={true} />

      <Button title="Cadastrar" />

    </View>
  );
}

function recuperarSenha() {
  return (
    <View style={styles.container}>
      <Text>ESQUECEU A SENHA</Text>

      <Input placeholder='E-MAIL' />

      <Button title="Enviar" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
});

export default login;