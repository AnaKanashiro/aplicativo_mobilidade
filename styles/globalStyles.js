import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'rgb(21, 52, 98)', 
    justifyContent: "center",
    padding: 20
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    color: "rgb(255, 255, 201)",
  },
  input: {
    height: 50,
    borderColor: "rgb(79, 160, 149)",
    backgroundColor: "rgb(79, 160, 149)",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: "rgb(255, 255, 201)"
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
  erro: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    color: 'rgb(255, 255, 201)' 
  },
  card: {
    backgroundColor: "rgb(255, 255, 201)",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
    botaoContainer: {
    marginTop: 30,
    alignItems: "center",
    marginBottom: 40,
  },
});