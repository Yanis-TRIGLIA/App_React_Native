
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert ,StatusBar} from 'react-native';
import {questions} from './data/question.js';
import { Pressable } from 'react-native';
import * as Print from 'expo-print';
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import * as Asset from 'expo-asset';
import {
  SafeAreaView,
  FlatList,
  DrawerLayoutAndroid,
  Image,
} from 'react-native';


const htmlContent = `
    <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tu es un CIMP</title>
    <style>
        body {
            font-size: 14px;
            color: rgb(0, 0, 0);
        }

        h1 {
            text-align: center;
            font-size: 24px;
        
        }
        p {
            font-style: italic;
        }
        .p1{
            font-style: italic;
            color: green;

        }
    </style>
</head>
<body>
    <br>
    <h1>Certification de compétence d'invocateur de Monstre </h1>
    <br>
    <br>
    <center>
    <ul>
        <li><strong>Compétence 1 : Validation de Cthulhu</strong></li>
        <p>Commentaire de l'examinateur : Vous serais valider quand vous pronomcerai correctement mon nom </p>
        <p class='p1'>Valider</p>
        <li><strong>Compétence 2 : Validation de Sphynx</strong></li>
        <p>Commentaire de l'examinateur : exelent , Mais veuiller ne plus prononcer 42 en ma présence</p>
        <p class='p1'>Valider</p>
        <li><strong>Compétence 3 : Validation de Leprechaun</strong></li>      
        <p>Commentaire  de l'examinateur: Merci pour le Pot-de-vin</p>
        <p class='p1'>Valider</p>
        <li><strong>Compétence 4 : Validation de Djin</strong></li>
        <p>Commentaire de l'examinateur : Arreter de demmander des voeux infinit a nos Djins ou ils vont se mettre en grève </p>
        <p class='p1'>Valider</p>
        <li><strong>Compétence 5 : Validation de Minotaure</strong></li>
        <p>Commentaire de l'examinateur: Correcte même si vous vous etes perdu dans le Dédale</p>
        <p class='p1'>Valider</p>
        <li><strong>Compétence 6 : Validation de l'hydre de Lerne</strong></li>
        <p>Commentaire de l'examinateur : Bien , vous devez quand penser a payer l'hopital</p>
        <p class='p1'>Valider</p>
        <li><strong>Compétence 7 : Validation de Cerbère</strong></li>
        <p>Commentaire de l'examinateur : Veiller à l'avenir d'éviter tous retard sur les lieux de l'examin </p>
        <p class='p1'>Valider</p>
        <li><strong>Compétence 8 : Validation de Chupacabra</strong></li>
        <p>Commentaire de l'examinateur : Votre comportement est inacceptable , Merci de cessé vos commentaires raciste sur les buritos</p>
        <p class='p1'>Valider</p>
        

    </ul>
    </center>

</body>
</html>
`;

const createAndSavePDF = async (html) => {
    try {
      const { uri } = await Print.printToFileAsync({ html });
      if (Platform.OS === "ios") {
        await Sharing.shareAsync(uri);
      } else {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
          
          await MediaLibrary.createAssetAsync(uri);
          alert("Votre Certifica est en Pdf dans document de votre téléphone")
        }
      }
  
    } catch (error) {
      console.error(error);
    }
  };





//on mélange les questions 
questions.sort(() => Math.random() - 0.5);

export default function Question(props) {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);


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

      const drawer = useRef(null);
      const [drawerPosition, setDrawerPosition] = useState('right');

    function Checkreponse(option) {
        // Si l'utilisateur a cliqué sur la bonne réponse
        if (option === questions[questionIndex].reponse) {
            setScore(score + 1);
        }

        // Passage à la question suivante
        setQuestionIndex(questionIndex + 1);
    }

    function resetQuiz() {
        setQuestionIndex(0);
        setScore(0);
    }

    if (!props.visible2) {
        return <View style={styles.container}></View>;
    }

    // Vérifier si nous avons atteint la fin du quiz
    const FinDuQuiz = questionIndex === questions.length;

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

            <Text style={styles.questionText}>Epreuve de C.I.M.P</Text>
            {!FinDuQuiz &&
                <View>
                    <Text style={styles.questionText}>{questions[questionIndex].question}</Text>
                    {questions[questionIndex].options.map((option) => (

                        <View style={styles.button}>
                            <Button
                                key={option}
                                title={option}
                                onPress={() => Checkreponse(option)}
                                color="#708D23"
                            />
                        </View>

                    ))}
                </View>
            }
            {FinDuQuiz &&
                <View>
                    <Text style={styles.questionText}>Fin du quiz !</Text>
                    <Text style={styles.questionText}>Votre score est de {score}/{questions.length}</Text>

                    <Button title="Recommencer" onPress={resetQuiz} color="#708D23" />
                    <Button title="Retour au Menu" onPress={props.close} color="#708D23" />
                    {score === questions.length &&
                        <Button title="Récupéré sa certification" onPress={()=>createAndSavePDF(htmlContent)} color="#708D23"/>
                    }
                </View>
            }
        </SafeAreaView>
        </DrawerLayoutAndroid>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: '#EDEDED',

    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',

        marginBottom:20,
    },
    button: {
        margin:20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        
    },
    scoreText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 30,
    },

    head2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight || 0,
        marginBottom: 200,
        justifyContent: 'flex-end',
        backgroundColor:"#D4D4D4",
    
      },
      mainTitle: {
        fontSize: 50,
        fontStyle: 'italic',
        marginLeft: 40,
      },
      buttonDrawer: {
        marginLeft: 25,
        marginRight: 10,
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

