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

import { DATACthulhu } from './data/cthulhu.js'; 
import { DATASphinx } from './data/sphinx.js';
import { DATAMinotaure } from './data/minotaure.js';
import { DATAChupacabra } from './data/chupacabra.js';
import { DATAHydre } from './data/hydre.js';
import { DATACerbere } from './data/cerbere.js';
import { DATALeprechaun } from './data/leprechaun.js';
import { DATADjin } from './data/djin.js';



export default function Monstre(props, titre) {
  var DATA = [];
  var lien = 'https://www.mjc-castanet-tolosan.fr/wp-content/uploads/2016/06/Pas-dimage-disponible1-e1466657277567.jpg';

  if(props.title == "Chtiiiulu"){
    var lien = 'https://cdn.pixabay.com/photo/2021/02/26/04/16/cthulhu-6050632_960_720.png';

    DATA = DATACthulhu; 
  }
  else if(props.title == "Sphinx"){
    var lien = 'https://i.pinimg.com/474x/b7/c1/11/b7c111971586816b73e9199c9c4d7816.jpg';
    DATA = DATASphinx;
  }
  else if(props.title == "leprechaun"){
    var lien = 'https://c8.alamy.com/compfr/m6pa1r/cartoon-leprechaun-st-patricks-day-caractere-comme-une-icone-verte-traditionnel-habille-comme-une-promotion-ou-marketing-sur-un-fond-blanc-avec-3d-m6pa1r.jpg';
    DATA = DATALeprechaun;
  }
  else if(props.title == "djin"){
    var lien = 'https://www.liveabout.com/thmb/bZ8F_v3XiCnmCc_mFsqGdOumgPo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/djinn-blue-56a6ee175f9b58b7d0e594cc.jpg';
    DATA = DATADjin;
  }
  else if (props.title == "Le Minotaure"){
    var lien = 'https://c8.alamy.com/compfr/rgn07j/dessin-a-la-main-d-un-minotaure-couleur-isolated-on-white-rgn07j.jpg';
    DATA = DATAMinotaure;
  }
  else if(props.title == "L’HYDRE DE LERNE"){
    var lien = 'https://static.wikia.nocookie.net/hanin/images/c/cc/Hydre.jpg/revision/latest/scale-to-width-down/350?cb=20180319144900&path-prefix=fr';
    DATA = DATAHydre;
  }
  else if(props.title == "CERBÈRE"){
    var lien = 'https://img.20mn.fr/zr1tTensT0-33VKisNkrOSk/490x314_cerbere-est-le-fidele-compagnon-d-hades-le-maitre-des-morts';
    DATA = DATACerbere;
  }
  else if(props.title == "chupacabra"){
    var lien = 'https://www.magic-ville.com/fr/scan_art?imid=37340';
    DATA = DATAChupacabra;
   
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

        <View style={styles.head2}>
        
            <Pressable Pressable onPress={props.close} >
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
                  style={styles.flecheLogo2}

                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/82/82122.png',
                  }}

                />
              </Pressable>
            </View>

          </View>
         
        
    
        <Text style={styles.titre}> Fiche Monstre : </Text>
        <Text style={styles.formation}>{props.title}</Text>

        <Image

          style={styles.tinyLogoMonstre}

          source={{
            uri: lien,
          }}
        />
        <InerTexte />
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};



