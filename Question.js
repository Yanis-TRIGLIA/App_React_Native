import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {questions} from './data/question.js';

//on mélange les questions 
questions.sort(() => Math.random() - 0.5);

export default function Question(props) {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

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
        <View style={styles.container}>
            <Text style={styles.questionText}>Epreuve de C.I.M.P</Text>
            {!FinDuQuiz &&
                <View>
                    <Text style={styles.questionText}>{questions[questionIndex].question}</Text>
                    {questions[questionIndex].options.map((option) => (
                        <Button
                            key={option}
                            title={option}
                            onPress={() => Checkreponse(option)}
                        />
                    ))}
                </View>
            }
            {FinDuQuiz &&
                <View>
                    <Text style={styles.questionText}>Fin du quiz !</Text>
                    <Text style={styles.questionText}>Votre score est de {score}/{questions.length}</Text>
                    <Button title="Recommencer" onPress={resetQuiz} />
                    <Button title="Retour au Menu" onPress={props.close} />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 30,
    },
    button: {
        width: 250,
        height: 50,
        marginVertical: 10,
        backgroundColor: '#FFB6C1',
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
});

