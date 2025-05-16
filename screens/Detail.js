import React, {Component} from "react";
import {Text, StyleSheet, View, StatusBar, SafeAreaView, Image, ImageBackground, ScrollView} from "react-native";
import { Icon } from "@rneui/themed";


export default function Detail(){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <View style={{height: 400}}>
                <ImageBackground source={require("../assets/interior1.png")} resizeMode="cover" style={{height:400}}>

                </ImageBackground>
            </View>

            <ScrollView>
                {/* seccion tittle */}
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Day house</Text>
                    <Text style={styles.textTitle}>$3.500.00</Text>
                </View>

                {/* seccion subtittle */}
                <View style={styles.containerSubtitle}>
                    <View style={styles.location}>
                        <Icon name="bookmark-outline" type="ionicon" size={20} color={'gray'}/>
                        <Text style={{color:'slategray', fontSize:15}}>Toluca</Text>
                    </View>

                     <View style={styles.location}>
                        <Icon name="star" type="font-awesome" size={20} color={'orange'}/>
                        <Text style={{color:'slategray', fontSize:15}}>4.5 Reviews</Text>
                    </View>
                </View>

                {/* sección de iconos */}
                <View style={styles.contenedorIcons}>
                    <View>
                        <Icon name="bed" type="font-awesome" size={20} color={'gray'}/>
                        <Text style={{color:'slategray', fontSize:15}}>4 Bedrooms</Text>
                    </View>

                    <View>
                        <Icon name="bath" type="font-awesome" size={20} color={'gray'}/>
                        <Text style={{color:'slategray', fontSize:15}}>3 Bathrooms</Text>
                    </View>

                    <View>
                        <Icon name="car" type="font-awesome" size={20} color={'gray'}/>
                        <Text style={{color:'slategray', fontSize:15}}>2 Parking</Text>
                    </View>
                </View>

                {/* Sección de descripción */}
                <View style={{marginTop: 40, marginBottom:40, paddingHorizontal: 20}}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.textDescription}>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
                </View>

                {/* Sección de facilidades */}
                <View style={styles.contenedorFacilities}>
                    <View style={styles.card}>
                        <Icon name="car" type="font-awesome" size={20} color={'gray'} style={{marginTop:10}}/>
                        <Text style={{color:'slategray', fontSize:15, textAlign:'center'}}>Parking</Text>
                    </View>

                    <View style={styles.card}>
                        <Icon name="camera" type="font-awesome" size={20} color={'gray'} style={{marginTop:10}}/>
                        <Text style={{color:'slategray', fontSize:15, textAlign:'center'}}>CCTV</Text>
                    </View>

                    <View style={styles.card}>
                        <Icon name="user-secret" type="font-awesome" size={20} color={'gray'} style={{marginTop:10}}/>
                        <Text style={{color:'slategray', fontSize:15, textAlign:'center'}}>Security</Text>
                    </View>

                    <View style={styles.card}>
                        <Icon name="minus" type="font-awesome" size={20} color={'gray'} style={{marginTop:10}}/>
                        <Text style={{color:'slategray', fontSize:15, textAlign:'center'}}>AC</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerTitle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"white",
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 5
    },
    textTitle:{
        fontSize: 20,
        fontWeight: "bold"
    },
    containerSubtitle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal: 20
    },
    location:{
        flexDirection:"row"
    },
    contenedorIcons:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        marginTop: 45
    },
    description:{
        fontSize: 20,
        fontWeight: "bold",
    },
    textDescription:{
        fontSize: 15,
        color: "slategray",
        marginTop: 5
    },
    contenedorFacilities:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 20
    },  
    card:{
        borderColor:"slategray",
        borderWidth:0.5,
        width: 70,
        height: 60,
        borderRadius: 12
    }
})