import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#E7C9C3',
    marginTop: 0,
  },

  section: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 32,
  },
  sectionText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  tinyLogo: {
    width: 90,
    height: 90,
    //on le bouge pour le mettre au centre
    marginLeft: 110,
    //on faiit une bordure
    borderWidth: 1.5,
    //on lui donne une couleur
    borderColor: 'black',
    //on lui donne un rayon
    borderRadius: 50,
    marginTop: 10,

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
    fontSize: 20,
    marginLeft: 125,
  
  },
  titre: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 65,
    fontFamily: 'sans-serif',

  },

  buttonDrawer: {
    marginLeft: 10,
    marginTop: 0,
  },


});
