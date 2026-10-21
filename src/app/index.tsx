import { StyleSheet, View, Text } from 'react-native';


//barra de navegação
//separar a home em telas e colocar animação de rolamento

export default function HomeScreen() {


  return (

    <View style={styles.container_principal}>

      <View style={styles.container_barra_navegacao}>

        <View style={styles.container_texto_barra_navegacao}>

          <View style={styles.container_aux_texto}>

            <Text style={styles.texto}>Entre em contato </Text>
            <Text style={styles.texto}>Sobre nós</Text>

          </View>
          
        </View>


      </View>
      
    </View>
    
  );


}

const styles = StyleSheet.create({

  container_principal: {
    flex: 1,


  },

  container_texto_barra_navegacao: {
    flex: 1,
  },

  container_aux_texto: {
    flexDirection: "row-reverse",
    paddingRight: 15,
    gap: 20,
  },

  container_barra_navegacao: {
    backgroundColor: "#020101",
    opacity: 0.9,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },

  //mudar a fonte
  texto: {
    fontSize: 17,
    color: "#FFFFFF",
  },
  

});
