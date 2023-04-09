import React, { useRef, useState } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { Button } from 'react-native';
import Monstre from './Monstre.js';
import Question from './Question.js';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  DrawerLayoutAndroid,
  Image,
} from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'Chtiiiulu',
  },
  {
    id: '2',
    title: 'Sphinx',
  },
  {
    id: '3',
    title: 'Jersey\'s Devil',
  },
  {
    id: '4',
    title: 'Scylla'
  },
  {
    id: '5',
    title: 'Le Minotaure'
  },
  {
    id: '6',
    title: 'L’HYDRE DE LERNE'
  },
  {
    id: '7',
    title: 'CERBÈRE'
  },
  {
    id: '8',
    title: 'chupacabra'
  },
];



export default function App() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('right');
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [title, setTitle] = useState("titre par default");


  const Item = ({ title }) => (
    <View style={styles.item}>
      <Image
        style={styles.tinyLogo}

        source={{
          uri: 'https://e7.pngegg.com/pngimages/941/871/png-clipart-upload-pivot-animator-animation-internet-forum-small-dots-miscellaneous-text.png',
        }}
      />
      <Button style={styles.title} title={title}
        //on ouvre le menu 

        onPress={() => setVisible(true) || setTitle(title)}
        color="#708D23"
      />

    </View>
  );



  const navigationView = () => (
    <View style={[styles.containerNavigation]}>
      <Text style={styles.paragraph}>Les Mentions Légales :</Text>
      <View style={[styles.mentionLegale]}>
        <Text style={styles.mentionLegaleTxt}>Cette application Appartient a "Thibault DE PERMENTIER" , L'application n'est donc pas Open source. Thibault DE PERMENTIER lancera des poursuite judiciaire dans le cas échéant </Text>
        <Text> </Text>
        <Text style={styles.mentionLegaleTxt}>Cordialement La direction</Text>

      </View>
      <Button
        title="Retour"
        color="#708D23"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  if (visible == false && visible2 == false) {
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <SafeAreaView style={styles.container}>
          <View style={styles.head}>
            <View>
              <Image
                style={styles.flecheLogo}

                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/56/56911.png',
                }}

              />
            </View>



            <Text style={styles.mainTitle}>C.I.M.P</Text>

            <View style={styles.buttonDrawer}>
              <Pressable onPress={() => drawer.current.openDrawer()}>
                <Image
                  style={styles.flecheLogo}

                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/82/82122.png',
                  }}

                />
              </Pressable>
            </View>

          </View>
          <Text style={styles.formation}>LES FORMATIONS :</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
           <View style = {styles.buttonCartification}>
            <Button title='Passer a la certification'
              onPress={() => setVisible2(true)}
              color="#708D23" />
          </View>
        </SafeAreaView>
      </DrawerLayoutAndroid>
    );
  }
  if (visible == true) {
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <Monstre visible={visible} close={() => setVisible(false)} title={title} />
      </DrawerLayoutAndroid>

    );
  }
  if (visible2 == true) {
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <Question visible2={visible2} close={() => setVisible(false)} />
      </DrawerLayoutAndroid>

    );
  }


};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#EDEDED",

  },
  containerNavigation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,

  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
  flecheLogo: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 35,
    justifyContent: 'flex-end',
    backgroundColor:"#D4D4D4",

  },
  mainTitle: {
    fontSize: 50,
    fontStyle: 'italic',
    marginLeft: 40,
  },
  formation: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  buttonDrawer: {
    marginLeft: 25,
    marginRight: 10,
  },
  paragraph: {
    marginTop: 100,
    marginBottom: 115,
    fontSize: 29,
    fontStyle: 'italic',
  },
  mentionLegale: {
    marginBottom: 276,
  },
  mentionLegaleTxt: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});

