import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { BackgroundImage, Icon } from "@rneui/base";

export default function Home(props) {
  return (
    <SafeAreaView Style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        translucent={false}
        backgroundColor={"#fff"}
        barStyle={"dark-content"}
      />
      <View style={styles.header}>
        <Text style={styles.TextoProfile}>Explore Property</Text>
        {/* meter imagen de perfil  */}
        <Image
          source={require("../assets/icon.png")}
          style={styles.porfileImage}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon
          raised
          name="search"
          type="font-awesome"
          size={12}
          color={"#ccc"}
        />
        <TextInput placeholder="Search pleace" />
      </View>

      <Text style={styles.result}>50 resultados encontrados</Text>

      {/* la lista de las imagenes */}
      <ScrollView>
        <TouchableOpacity style={styles.contenedorImage} onPress={()=>props.navigation.navigate('Detail')}>
          {/* imagen de casa */}
          <ImageBackground
            source={require("../assets/casa1.png")}
            imageStyle={{ borderRadius: 20 }}
            style={styles.estiloImagenes}
          >
            <Text style={styles.TextoSale}>For sale</Text>

            {/* contendor padre */}
            <View style={styles.ContendeorInfor}>
              <View>
                <Text style={styles.Textoinfo}>Day house</Text>
              </View>

              <View>
                <Text style={styles.Textoinfo}>$5000</Text>
                <View style={styles.ContenedorReview}>
                  <Icon
                    name="star"
                    type="font-awasome"
                    size={20}
                    color={"orange"}
                  />
                  <Text style={styles.Textoinfo}>4.5 Reviews</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contenedorImage}>
          {/* imagen de casa */}
          <ImageBackground
            source={require("../assets/casa2.png")}
            imageStyle={{ borderRadius: 20 }}
            style={styles.estiloImagenes}
          >
            <Text style={styles.TextoSale}>For sale</Text>

            {/* contendor padre */}
            <View style={styles.ContendeorInfor}>
              <View>
                <Text style={styles.Textoinfo}>Day house</Text>
              </View>

              <View>
                <Text style={styles.Textoinfo}>$5000</Text>
                <View style={styles.ContenedorReview}>
                  <Icon
                    name="star"
                    type="font-awasome"
                    size={20}
                    color={"orange"}
                  />
                  <Text style={styles.Textoinfo}>4.5 Reviews</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  porfileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  TextoProfile: {
    fontSize: 22,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: "slategray",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  contenedorImage: {
    margin: 20,
  },
  estiloImagenes: {
    height: 230,
  },
  TextoSale: {
    color: "white",
    backgroundColor: "#00CCFF",
    height: 30,
    width: 70,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
    paddingLeft: 10,
    paddingTop: 5,
    fontWeight: "bold",
  },
  ContendeorInfor: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 20,
  },
  Textoinfo: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
  ContenedorReview: {
    flexDirection: "row",
  },
});
