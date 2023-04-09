import { StyleSheet , StatusBar } from 'react-native';
  


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:"#EDEDED",
    marginTop: 0,
  },

  section: {
    backgroundColor: '#708D23',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 32,
    marginRight:20,
    marginLeft:20,
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
    backgroundColor:"#EDEDED",
  },

  tinyLogoMonstre: {
    width: 90,
    height: 90,
    //on le bouge pour le mettre au centre
    marginLeft: 130,
    //on faiit une bordure
    borderWidth: 1.5,
    //on lui donne une couleur
    borderColor: 'black',
    //on lui donne un rayon
    borderRadius: 50,
    marginTop: 10,

  },

  tinyLogo:{
      width: 50,
      height: 50,
    

  },
  head2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight || 0,
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
    marginLeft: 140,
  
  },
  titre: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 85,
    fontFamily: 'sans-serif',

  },


  buttonDrawer: {
    marginLeft: 25,
    marginRight: 10,
  },
  buttonCartification:{
    margin:10,

  },
  flecheLogo: {
    width: 60,
    height: 60,
    marginLeft: 40,
  },

  flecheLogo2: {
    width: 60,
    height: 60,
    marginLeft: 10,
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
