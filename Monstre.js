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


export default function Monstre(props, titre) {

  var lien = 'https://www.mjc-castanet-tolosan.fr/wp-content/uploads/2016/06/Pas-dimage-disponible1-e1466657277567.jpg';
  var DATA = [];

  if(props.title == "Chtiiiulu"){
    var lien = 'https://cdn.pixabay.com/photo/2021/02/26/04/16/cthulhu-6050632_960_720.png';
    

    DATA = [

      [
        {
          id: '1',
          texte: 'arretehjz les calamars à la romaine',
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
          id: '1',
          texte: 'ne pas confondre avec le Monstre en stdddphagetti volant'
        },
        {
          id: '2',
          texte: 'ceci est le texte'
        },
        {
          id: '3',
          texte: 'cela est le texte'
        },
      ],
      [
        {
          id: '1',
          texte: 'this is text'
        },
        {
          id: '2',
          texte: 'thats is the text'
        },
        {
          id: '3',
          texte: 'this is sparta'
        },
      ],


    ];
  }
  else if(props.title == "Sphinx"){
    var lien = 'https://i.pinimg.com/474x/b7/c1/11/b7c111971586816b73e9199c9c4d7816.jpg';
    DATA = [

      [
        {
          id: '1',
          texte: 'arretez de répondre au question',
        },
        {
          id: '2',
          texte: 'se renommer toto',
        },
        {
          id: '3',
          texte: 'arréter de penser',
        },
      ],
      [
        {
          id: '1',
          texte: 'le sphinxxxx'
        },
        {
          id: '2',
          texte: 'ceci est le texte'
        },
        {
          id: '3',
          texte: 'cela est le texte'
        },
      ],
      [
        {
          id: '1',
          texte: 'this is text'
        },
        {
          id: '2',
          texte: 'thats is the text'
        },
        {
          id: '3',
          texte: 'this is sparta'
        },
      ],


    ];
  }
  else if(props.title == "Jersey's Devil"){
    var lien = 'https://www.libraries.rutgers.edu/sites/default/files/styles/4x3_teaser/public/2022-01/nj-devil-exhibit.png?h=24058c8d&itok=4Ig5V4Gi';
    DATA = [

      [
        {
          id: '1',
          texte: 'jersey coucou',
        },
        {
          id: '2',
          texte: 'se renommer toto',
        },
        {
          id: '3',
          texte: 'arréter de penser',
        },
      ],
      [
        {
          id: '1',
          texte: 'le sphinxxxx'
        },
        {
          id: '2',
          texte: 'ceci est le texte'
        },
        {
          id: '3',
          texte: 'cela est le texte'
        },
      ],
      [
        {
          id: '1',
          texte: 'this is text'
        },
        {
          id: '2',
          texte: 'thats is the text'
        },
        {
          id: '3',
          texte: 'this is sparta'
        },
      ],


    ];
  }
  else if(props.title == "chupacabra"){
    var lien = 'https://www.magic-ville.com/fr/scan_art?imid=37340';
    DATA = [

      [
        {
          id: '1',
          texte: 'jersey coucou',
        },
        {
          id: '2',
          texte: 'se renommer toto',
        },
        {
          id: '3',
          texte: 'arréter de penser',
        },
      ],
      [
        {
          id: '1',
          texte: 'le sphinxxxx'
        },
        {
          id: '2',
          texte: 'ceci est le texte'
        },
        {
          id: '3',
          texte: 'cela est le texte'
        },
      ],
      [
        {
          id: '1',
          texte: 'this is text'
        },
        {
          id: '2',
          texte: 'thats is the text'
        },
        {
          id: '3',
          texte: 'this is sparta'
        },
      ],


    ];
  }






  const Item = ({ texte }) => (
    <View style={styles.item}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: lien,
        }}
      />
      <Text>{texte}</Text>
    </View>
  );




  const InerTexte = ({ }) => {
    const [basique, setBasique] = useState(-1)
    const [essentiels, setEssentiels] = useState(-1)
    const [rituel, setRituel] = useState(-1)

    return (

      <ScrollView>
        <Pressable onPress={() => setBasique(basique == 0 ? -1 : 0)}>
          <Text>Basique</Text>
        </Pressable>
        {(basique == 0) && <List data={DATA[0]} />}
        <Pressable onPress={() => setEssentiels(essentiels == 1 ? -1 : 1)}>
          <Text>Les essentiels</Text>
        </Pressable>

        {(essentiels == 1) && <List data={DATA[1]} />}
        <Pressable onPress={() => setRituel(rituel == 2 ? -1 : 2)}>
          <Text>1er rituel</Text>
        </Pressable>
        {(rituel == 2) && <List data={DATA[2]} />}
      </ScrollView>
    )
  };

  const List = ({ data }) => (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item texte={item.texte} />}
      keyExtractor={item => item.id}
    />
  );




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

  if (!props.visible) {
    return <View style={styles.container}></View>
  }

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>

          <View style={styles.buttonDrawer}>

          </View>
        </View>
        <Text style={styles.formation}>{props.title}</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: lien,
          }}
        />
        <InerTexte />
        <Button title='Retour'
          onPress={props.close} />
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
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 35,
    justifyContent: 'flex-end',

  },
  mainTitle: {
    fontSize: 50,
    marginLeft: 50,
  },
  formation: {
    fontSize: 15
  },
  buttonDrawer: {
    marginLeft: 10,
  },
});

