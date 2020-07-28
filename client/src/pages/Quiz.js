import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import intervals from "../Music/Intervals";
import IntervalForm from "../components/IntervalForm";
import API from "../utils/API";

function Quiz() {
  // Setting our component's initial state
  const [score, setScore] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    startScore();
  }, [])

  async function startScore() {
    let user = await API.getUser("5f1fe9f54acd921ec085575b");
    let scores = Object.values(user.data.statistics.intervalScores);
    setScore(() => ({
      correctCurrent: 0,
      totalCurrent: 0,
      mostRightCurrent: null,
      leastRightCurrent: null,
      percentageCorrectCurrent: "10%",
      correct: user.data.statistics.correct,
      total: user.data.statistics.total,
      mostRight: null,
      leastRight: null,
      percentageCorrect: "10%",
      // index is number of semi-tones
      intervalScores: scores
    }));
    alert("Ready!");
  }

  //useranswer is what the user chose, correct is whether or not it is correct.
  const handleAnswer = (answerSemiTones, correct) => {
    let intervalScores = score.intervalScores;
    intervalScores[answerSemiTones] = { correct: intervalScores[answerSemiTones].correct + correct, total: intervalScores[answerSemiTones].total + 1 }
    
    if (correct) {
      setScore(() => ({...score, ...intervalScores,
        correctCurrent: score.correctCurrent + 1,
        totalCurrent: score.totalCurrent + 1,
        correct: score.correct + 1,
        total: score.total + 1,
        intervalScores
      }));
    }
    else {
      setScore(() => ({...score,
        totalCurrent: score.totalCurrent + 1,
        total: score.total + 1,
        intervalScores
      }));
    };

    API.updateUser({
      statistics: {
        total: score.total + 1,
        correct: score.correct + correct,
        intervalScores: intervalScores
      }
    });

  }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Is This Interval?</h1>
            </Jumbotron>

            <IntervalForm handleAnswerr={handleAnswer}/>

          </Col>

          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Statistics:</h1>
            </Jumbotron>
            <h2> This session:</h2>
            <ul>
              <li>Correct: {score.correctCurrent}</li>
              <li>Total: {score.totalCurrent}</li>
              <li>percentage correct: {Math.floor(score.correctCurrent / (score.totalCurrent) *100)}%</li>
            </ul>
            <h2>All-Time:</h2>
            <ul>
              <li>Correct: {score.correct}</li>
              <li>Total: {score.total}</li>
              <li>percentage correct: {Math.floor(score.correct / (score.total) *100)}%</li>
              <li>Most total: {JSON.stringify(score.intervalScores)}</li>
              <li>Most total: {JSON.stringify(score.intervalScores)}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }


export default Quiz;
