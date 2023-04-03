import React, { useRef, useState } from 'react';
import { TextBase } from 'react-native';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import { Button } from 'react-native';
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
  [
    {
      id: '1',
      texte: 'arretez les calamars à la romaine',
    },
    {
      id: '2',
      texte: 'se renommer kenny',
    },
    {
      id: '3',
      texte: 's\'habitué a l\'odeur du poisson',
    },
  ],
  [
    {
      id:'1',
      texte:'ne pas confondre avec le Monstre en sphagetti volant'
    },
    {
      id:'2',
      texte:'ceci est le texte'
    },
    {
      id:'3',
      texte:'cela est le texte'
    },
  ],
  [
    {
      id:'1',
      texte:'this is text'
    },
    {
      id:'2',
      texte:'thats is the text'
    },
    {
      id:'3',
      texte:'this is sparta'
    },
  ],
];

const Item = ({ texte }) => (
  <View style={styles.item}>
    <Image
      style={styles.tinyLogo}
      source={{
        uri: 'http://www.rugby-privas.fr/wp-content/uploads/2014/01/point.jpg',
      }}
    />
    <Text>{texte}</Text>
  </View>
);




const InerTexte = ({}) => {
  const [basique, setBasique] = useState(-1)
  const [essentiels, setEssentiels] = useState(-1)
  const [rituel, setRituel] = useState(-1)

  return(
  <ScrollView>
    <Pressable onPress={()=>setBasique(basique==0? -1:0)}>
        <Text>Basique</Text>
    </Pressable>
      {(basique == 0) && <List data={DATA[0]}/>}
    <Pressable onPress={()=>setEssentiels(essentiels==1? -1:1)}>
        <Text>Les essentiels</Text>
    </Pressable>
      {(essentiels == 1) && <List data={DATA[1]}/>}
    <Pressable onPress={()=>setRituel(rituel==2? -1:2)}>
        <Text>1er rituel</Text>
    </Pressable>
      {(rituel == 2) && <List data={DATA[2]}/>}
  </ScrollView>
  )
};

const List = ({data}) => (
  <FlatList
            data={data}
            renderItem={({ item }) => <Item texte={item.texte} />}
            keyExtractor={item => item.id}
          />
);

const Monstre = (title) => {
  title = 'Chtulu'

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('right');


  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>C'est les options!!!!!!!!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
        <Pressable Pressable onPress={() => drawer.current.openDrawer()}>
          <Image
            style={styles.flecheLogo}
      
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/56/56911.png',
            }}
          
          />
        </Pressable>
          
          

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
        <Text style={styles.formation}>{title}</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/02/26/04/16/cthulhu-6050632_960_720.png',
          }}
        />
        <InerTexte/>
        <Button title='Certification'/>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#EDEDED",
  },
  containerNavigation:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#EDEDED",


  },


  item: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor:"#EDEDED",

  },
  BoutonMonstre: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    
  },
  flecheLogo: {
    width: 60,
    height: 60,
    marginLeft:10,
    
    
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
    fontStyle:"italic",
    marginLeft: 40,
  
  },
  formation: {
    fontSize: 20,
    fontWeight:"bold",
    marginBottom:30,
    fontStyle:"italic",
    
  },
  buttonDrawer: {
    marginLeft: 25,
    marginRight:10,
    
  },

  paragraph:{
    marginTop:100,
    marginBottom:115,
    fontSize:29,
    fontStyle:"italic",
  },

  mentionLegale:{
    marginBottom:276

  },

  mentionLegaleTxt:{
    fontSize:20,
    fontStyle:"italic",

  },

});


export default Monstre;