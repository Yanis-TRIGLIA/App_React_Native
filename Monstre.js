import React, { useRef, useState } from 'react';
import { styles } from './css/style.js';
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
import { DATAC } from './data/cthulhu.js'; 
import { DATAS } from './data/sphinx.js';


export default function Monstre(props, titre) {
  var DATA = [];
  var lien = 'https://www.mjc-castanet-tolosan.fr/wp-content/uploads/2016/06/Pas-dimage-disponible1-e1466657277567.jpg';

  if(props.title == "Chtiiiulu"){
    var lien = 'https://cdn.pixabay.com/photo/2021/02/26/04/16/cthulhu-6050632_960_720.png';
    DATA = DATAC;

    
  }
  else if(props.title == "Sphinx"){
    var lien = 'https://i.pinimg.com/474x/b7/c1/11/b7c111971586816b73e9199c9c4d7816.jpg';
    DATA = DATAS;
    
  }
  else if(props.title == "Jersey's Devil"){
    var lien = 'https://www.libraries.rutgers.edu/sites/default/files/styles/4x3_teaser/public/2022-01/nj-devil-exhibit.png?h=24058c8d&itok=4Ig5V4Gi';

  }
  else if(props.title == "chupacabra"){
    var lien = 'https://www.magic-ville.com/fr/scan_art?imid=37340';
   
  }

  const Item = ({ texte }) => (
    <View style={styles.item}>
      <Text>{texte}</Text>
    </View>
  );




  const InerTexte = ({ }) => {
    const [basique, setBasique] = useState(-1)
    const [essentiels, setEssentiels] = useState(-1)
    const [rituel, setRituel] = useState(-1)

    return (

      
      <FlatList
      data={[
        { key: 'basique' },
        { key: 'essentiels' },
        { key: 'rituel' },
      ]}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 16 }}>
          {item.key === 'basique' && (
            <View>
              <Pressable onPress={() => setBasique(basique == 0 ? -1 : 0)} style={styles.section}>
                <Text style={styles.sectionText}>Basique</Text>
              </Pressable>
              {basique === 0 && <List data={DATA[0]} />}
            </View>
          )}
          {item.key === 'essentiels' && (
            <View>
              <Pressable onPress={() => setEssentiels(essentiels == 1 ? -1 : 1)} style={styles.section}>
                <Text style={styles.sectionText}>Les essentiels</Text>
              </Pressable>
              {essentiels === 1 && <List data={DATA[1]} />}
            </View>
          )}
          {item.key === 'rituel' && (
            <View>
              <Pressable onPress={() => setRituel(rituel == 2 ? -1 : 2)} style={styles.section}>
                <Text style={styles.sectionText}>1er rituel</Text>
              </Pressable>
              {rituel === 2 && <List data={DATA[2]} />}
            </View>
          )}
        </View>
      )}
      keyExtractor={item => item.key}
      style={styles.container}
    />
  );
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
      <Text style={styles.paragraph}>C'est les options!</Text>
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
        <Text style={styles.titre}> Fiche Monstre : </Text>
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



