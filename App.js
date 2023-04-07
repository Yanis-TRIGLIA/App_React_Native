import React, { useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native';
import Monstre from './Monstre.js';

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
  const [title, setTitle] = useState("titre par default" );


  const Item = ({ title }) => (
    <View style={styles.item}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'http://www.rugby-privas.fr/wp-content/uploads/2014/01/point.jpg',
        }}
      />
      <Button style={styles.title} title={title}
        //on ouvre le menu 
        
        onPress={() => setVisible(true) || setTitle(title) }
        
        

      />

    </View>
  );





  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>C'est les options c</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  if (visible == false) {
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <SafeAreaView style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.mainTitle}>C.I.M.P</Text>
            <View style={styles.buttonDrawer}>
              <Button
                title="NULL"
                onPress={() => drawer.current.openDrawer()}
                color='#f1f'

              />
            </View>
            <Monstre visible={visible} close={() => setVisible(false)} />

          </View>
          <Text style={styles.formation}>LES FORMATIONS</Text>


          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}

          />



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
        <SafeAreaView style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.mainTitle}>C.I.M.P</Text>
            <View style={styles.buttonDrawer}>
              <Button
                title="NULL"
                onPress={() => drawer.current.openDrawer()}
                color='#f1f'

              />

            </View>
          </View>
        </SafeAreaView>
        <Monstre visible={visible} close={() => setVisible(false)} title={title} />
      </DrawerLayoutAndroid>

    );
  }

};


/*
  return (
       
  );*/



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

