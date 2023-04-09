import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert ,StatusBar} from 'react-native';
import {questions} from './data/question.js';
import { Pressable } from 'react-native';

import {
  SafeAreaView,
  FlatList,
  DrawerLayoutAndroid,
  Image,
} from 'react-native';


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

