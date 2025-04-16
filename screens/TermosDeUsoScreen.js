import React from "react";
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function TermosDeUsoScreen({ navigation }) {
  const handleVoltar = () => {
    navigation.goBack(); 
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Termos de Uso e Responsabilidade do Usuário</Text>

        <Text style={styles.subtitulo}>1. Aceitação dos Termos</Text>
        <Text style={styles.paragrafo}>
          Ao utilizar o aplicativo Fluxo, o usuário concorda com os termos e condições descritos neste documento...
        </Text>

        <Text style={styles.subtitulo}>2. Uso de Dados Públicos</Text>
        <Text style={styles.paragrafo}>
          O aplicativo pode fornecer acesso a dados públicos de mobilidade e informações relacionadas a rotas...
        </Text>

        <Text style={styles.subtitulo}>3. Raspagem de Dados</Text>
        <Text style={styles.paragrafo}>
          A raspagem de dados, ou coleta automatizada de informações, é proibida...
        </Text>

        <Text style={styles.subtitulo}>4. Responsabilidade pela Coleta e Uso de Dados</Text>
        <Text style={styles.paragrafo}>O usuário é responsável por garantir que quaisquer dados coletados sejam tratados de acordo com a LGPD, incluindo:</Text>
        <Text style={styles.lista}>• Obter consentimento explícito;</Text>
        <Text style={styles.lista}>• Usar dados apenas para fins autorizados;</Text>
        <Text style={styles.lista}>• Não divulgar dados sem permissão.</Text>

        <Text style={styles.subtitulo}>5. Proibição de Uso Indevido</Text>
        <Text style={styles.lista}>• Obtenção não autorizada de dados;</Text>
        <Text style={styles.lista}>• Acesso não autorizado a partes do app;</Text>
        <Text style={styles.lista}>• Causar danos ao sistema ou usuários.</Text>

        <Text style={styles.subtitulo}>6. Consequências do Uso Indevido</Text>
        <Text style={styles.paragrafo}>
          O uso indevido pode resultar em ações legais e suspensão da conta.
        </Text>

        <Text style={styles.subtitulo}>7. Direitos do Usuário sobre Dados Pessoais</Text>
        <Text style={styles.paragrafo}>
          O usuário pode acessar, corrigir ou excluir seus dados. Contato: fluxo.suporte.app@gmail.com
        </Text>

        <Text style={styles.titulo}>Política de Privacidade</Text>

        <Text style={styles.subtitulo}>1. Coleta de Dados</Text>
        <Text style={styles.paragrafo}>
          O app coleta dados como localização, preferências e uso para melhorar a experiência.
        </Text>

        <Text style={styles.subtitulo}>2. Uso de Dados</Text>
        <Text style={styles.lista}>• Personalizar serviços;</Text>
        <Text style={styles.lista}>• Melhorar segurança;</Text>
        <Text style={styles.lista}>• Analisar comportamento de uso.</Text>

        <Text style={styles.subtitulo}>3. Compartilhamento de Dados</Text>
        <Text style={styles.paragrafo}>
          Dados não são compartilhados sem consentimento, exceto por obrigação legal.
        </Text>

        <Text style={styles.subtitulo}>4. Segurança dos Dados</Text>
        <Text style={styles.paragrafo}>
          O Fluxo adota medidas de segurança. O usuário deve proteger suas credenciais.
        </Text>

        <Text style={styles.subtitulo}>5. Alterações na Política de Privacidade</Text>
        <Text style={styles.paragrafo}>
          Alterações serão notificadas por e-mail ou dentro do app.
        </Text>

        {/* Espaço para o botão */}
        <View style={styles.botaoContainer}>
          <TouchableOpacity style={styles.botao} onPress={handleVoltar}>
            <Text style={styles.textoBotao}>Termos de uso lido</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0a4973",
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 14,
    color: "#0a4973",
  },
  paragrafo: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 22,
  },
  lista: {
    fontSize: 14,
    marginLeft: 10,
    lineHeight: 22,
  },
  botaoContainer: {
    marginTop: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  botao: {
    backgroundColor: "rgb(160, 0, 247)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
