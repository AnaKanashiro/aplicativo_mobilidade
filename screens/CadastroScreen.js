import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [erro, setErro] = useState("");

  const abrirTermosDeUso = () => {
    navigation.navigate("TermosDeUso");
  };

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem");
      return;
    }

    if (!aceitouTermos) {
      setErro("Você deve aceitar os termos de uso");
      return;
    }

    try {
      const usuariosString = await AsyncStorage.getItem("usuarios");
      const usuarios = usuariosString ? JSON.parse(usuariosString) : [];

      const usuarioExistente = usuarios.find((u) => u.email === email);
      if (usuarioExistente) {
        setErro("Email já cadastrado");
        return;
      }

      const novoUsuario = { nome, email, senha };
      usuarios.push(novoUsuario);

      await AsyncStorage.setItem("usuarios", JSON.stringify(usuarios));
      navigation.navigate("LogIn");
    } catch (error) {
      setErro("Erro ao cadastrar usuário");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <View style={styles.termosContainer}>
        <Switch value={aceitouTermos} onValueChange={setAceitouTermos} />
        <View style={styles.termosTextoContainer}>
          <Text style={styles.termosTexto}>Concordo com os </Text>
          <TouchableOpacity onPress={abrirTermosDeUso}>
            <Text style={styles.termosLink}> Termos de Uso e Política de Privacidade (LGPD)</Text>
          </TouchableOpacity>
        </View>
      </View>

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <Text style={styles.link}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  termosContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  termosTexto: {
    marginLeft: 10,
    flex: 1,
  },
  botao: {
    backgroundColor: "rgb(160, 0, 247)",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    color: "#2563EB",
    textAlign: "center",
    marginTop: 20,
  },
  erro: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  termosContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flexWrap: "wrap",
  },
  termosTextoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginLeft: 10,
    flex: 1,
  },
  termosTexto: {
    fontSize: 14,
  },
  termosLink: {
    color: "rgb(160, 0, 247)",
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 14,
  },
});
