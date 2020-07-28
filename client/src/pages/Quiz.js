import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import intervals from "../Music/Intervals";
import IntervalForm from "../components/IntervalForm";
import API from "../utils/API";
// import IntervalSwitch from "../utils/SwitchCase";

function Quiz() {
  // Setting our component's initial state
  const [score, setScore] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    startScore();
  }, [])

  async function startScore() {
    let user = await API.getUser("5f1fbbb57fe9633060a8cdc8");
    console.log(user)
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
      intervalScores: {
        PerfectUnison: { correct: 0 , total:0},
        MinorSecond: { correct:0, total:0 },
        MajorSecond: { correct:0, total:0 },
        MinorThird: { correct:0, total:0 },
        MajorThird: { correct:0, total:0 },
        PerfectFourth: { correct:0, total:0 },
        Tritone: { correct:0, total:0 },
        PerfectFifth: { correct:0, total:0 },
        MinorSixth: { correct:0, total:0 },
        MajorSixth: { correct:0, total:0 },
        MinorSeventh: { correct:0, total:0 },
        MajorSeventh: { correct:0, total:0 },
        PerfectOctave: { correct:0, total:0 }
      }
    }));
    alert("Ready!");
  }

  //useranswer is what the user chose, correct is whether or not it is correct.
  const handleAnswer = (userAnswer, correct) => {
    userAnswer = userAnswer.replace(' ','');
    // console.log(IntervalSwitch(userAnswer));
    if (correct) {
      setScore(() => ({...score,
        correctCurrent: score.correctCurrent + 1,
        totalCurrent: score.totalCurrent + 1,
        correct: score.correct + 1,
        total: score.total + 1,
        intervalScores: {

        }
      }));
    }
    else {
      setScore(() => ({...score,
        totalCurrent: score.totalCurrent + 1,
        total: score.total + 1
      }));
    };

    API.updateUser({
      statistics: {
        total: score.total + 1,
        correct: score.correct + correct
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
              <li>Most correct: {score.mostRightCurrent}</li>
              <li>Most total: {score.leastRightCurrent}</li>
            </ul>
            <h2>All-Time:</h2>
            <ul>
              <li>Correct: {score.correct}</li>
              <li>Total: {score.total}</li>
              <li>percentage correct: {Math.floor(score.correct / (score.total) *100)}%</li>
              <li>Most correct: {score.mostRight}</li>
              <li>Most total: {score.leastRight}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }


export default Quiz;
