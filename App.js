import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Avatar } from 'react-native-elements'
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native-elements';

function login({ navigation }) {
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

      <Input placeholder='LOGIN' />

      <Input placeholder="SENHA" secureTextEntry={true} />

      <Button title="Login" onPress={() => navigation.navigate('ListaContato')} buttonStyle={styles.button} />
      <Button title="Cadastre-se" onPress={() => navigation.navigate('CadastroUser')} buttonStyle={styles.button2} />
      <Button title="Esqueceu a senha"
        type="clear"
        onPress={() => navigation.navigate('RecuperarSenha')}
      />
    </View>
  );
}

function listaContatos({navigation}) {
  const list = [
    {
      name: 'Marcos',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '81 988553424',
      email: "example@exemplo.com",
    },
    {
      name: 'Patrícia',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '81 998765332',
      email: "example@exemplo.com",
    },
    {
      name: 'Rodrigo',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '81 987765525',
      email: "example@exemplo.com",
    },
    {
      name: 'Marcos',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '81 988553424',
      email: "example@exemplo.com",
    },
    {
      name: 'Patrícia',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '81 998765332',
      email: "example@exemplo.com",
    },
    {
      name: 'Rodrigo',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '81 987765525',
      email: "example@exemplo.com",
    },
  ]

  return (
    <View style={styles.container2}>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Contato", {nome: l.name, email: l.email, telefone: l.subtitle})}>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
  );
}

function cadastroUser() {
  return (
    <View style={styles.container}>

      <Input placeholder='NOME' />

      <Input placeholder='CPF' />

      <Input placeholder='E-MAIL' />

      <Input placeholder="SENHA" secureTextEntry={true} />

      <Button title="Salvar" buttonStyle={styles.button} />

    </View>
  );
}

function cadastroContato() {
  return (
    <View style={styles.container}>

      <Input placeholder='NOME' />

      <Input placeholder='E-MAIL' />

      <Input placeholder="TELEFONE" />

      <Button title="Salvar" buttonStyle={styles.button} />

    </View>
  );
}

function recuperarSenha() {
  return (
    <View style={styles.container}>

      <Input placeholder='E-MAIL' />

      <Button title="Enviar" buttonStyle={styles.button} />

    </View>
  );
}

function contato({route}) {
  const{nome, email, telefone} = route.params;

  return (
    <View style={styles.container}>
      <Text h4 style={styles.caixa}>NOME</Text>
      <Text h4>{nome}</Text>
      <Text h4 style={styles.caixa}>E-MAIL</Text>
      <Text h4>{email}</Text>
      <Text h4 style={styles.caixa}>TELEFONE</Text>
      <Text h4>{telefone}</Text>

      <Button title="Alterar" buttonStyle={styles.button} />

      <Button title="Excluir" buttonStyle={styles.button2} />

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
  button: {
    backgroundColor: 'black',
    width: 200,
  },
  button2: {
    backgroundColor: 'red',
    width: 200,
  },
  container2: {
    flex: 1,
    padding: 20,
  },
  caixa: {
    backgroundColor: '#d1d1d1',
    color: "black",
    width: 300,
    padding: 10,
  }
});

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />

        <Stack.Screen name="ListaContato" component={listaContatos} options={({ navigation }) => ({ headerRight: () => (<Ionicons name="add" size={24} color="black" style={{ marginRight: 10 }} onPress={() => navigation.navigate('NovoContato')} />), })} />

        <Stack.Screen name="CadastroUser" component={cadastroUser} options={{ headerTitleAlign: 'center', }} />

        <Stack.Screen name="NovoContato" component={cadastroContato} options={{ headerTitleAlign: 'center', }} />

        <Stack.Screen name="Contato" component={contato} options={{ headerTitleAlign: 'center', }} />

        <Stack.Screen name="RecuperarSenha" component={recuperarSenha} options={{ headerTitleAlign: 'center', }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;