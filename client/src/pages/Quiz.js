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
    let user = await API.getUser("Nicholassss");

    // creates a user if there are none
    if (!user.data[0]) {
      await API.createUser();
      let intervalScoreInitiation = [];

      for (let i = 0; i < 13; i++) {
        intervalScoreInitiation.push({ correct: 0, total: 0 })
      }
      await API.updateUser({
        statistics: {
          intervalScores: intervalScoreInitiation
        }
      });

      user = await API.getUser("Nicholassss");

    }

    let scores = Object.values(user.data[0].statistics.intervalScores);

    // calculates the best and worst intervals    
    let intervalScoreArray = [];
    for (let i = 0; i < user.data[0].statistics.intervalScores.length; i++) {
      let interval = intervals[i].name;
      let percentage = user.data[0].statistics.intervalScores[i].correct / user.data[0].statistics.intervalScores[i].total * 100;
      intervalScoreArray.push([interval, percentage])
    }

    let highestScore = ["unknown", 0];
    let lowestScore = ["unknown", 101];

    for (let i = 0; i < intervalScoreArray.length; i++) {
      let interval = intervalScoreArray[i];
      if (interval[1] > -1 && interval[1] > highestScore[1]) {
        highestScore = interval;
      }
      else if (interval[1] > -1 && interval[1] < lowestScore[1]) {
        lowestScore = interval;
      }
    }

    await setScore(() => ({
      //statistics for this session
      correctCurrent: 0,
      totalCurrent: 0,

      //stastics for all time
      correct: user.data[0].statistics.correct,
      total: user.data[0].statistics.total,
      
      // keeps track of the most right and least right intervals, from all time.
      bestScoreInterval: highestScore[0],
      bestScorePercentage: highestScore[1],
      worstScoreInterval: lowestScore[0],
      worstScorePercentage: lowestScore[1],

      // index is number of semi-tones
      intervalScores: scores
    }));
  }

  const resetUser = async () => {
    await API.deleteUser();
    startScore();
  }

  //useranswer is what the user chose, correct is whether or not it is correct.
  const handleAnswer = async (answerSemiTones, correct) => {
    let intervalScores = score.intervalScores;
    intervalScores[answerSemiTones] = { correct: intervalScores[answerSemiTones].correct + correct, total: intervalScores[answerSemiTones].total + 1 }

    // maps the elements of the array for the statistics side to display stats
    let intervalScoreArray = [];
    for (let i = 0; i < score.intervalScores.length; i++) {
      let interval = intervals[i].name;
      let percentage = score.intervalScores[i].correct / score.intervalScores[i].total * 100;
      intervalScoreArray.push([interval, percentage])
    }

    let highestScore = ["unknown", 0];
    let lowestScore = ["unknown", 100];

    // finds highest and lowest scores
    for (let i = 0; i < intervalScoreArray.length; i++) {
      let interval = intervalScoreArray[i];
      if (interval[1] > -1 && interval[1] > highestScore[1]) {
        highestScore = interval;
      }
      else if (interval[1] > -1 && interval[1] < lowestScore[1]) {
        lowestScore = interval;
      }
    }

    //correct is a boolean
    setScore(() => ({...score, ...intervalScores,
      correctCurrent: score.correctCurrent + correct,
      totalCurrent: score.totalCurrent + 1,
      correct: score.correct + correct,
      total: score.total + 1,
      bestScoreInterval: highestScore[0],
      bestScorePercentage: highestScore[1],
      worstScoreInterval: lowestScore[0],
      worstScorePercentage: lowestScore[1]
    }));

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
          <Col size="m6 sm2">
            <Jumbotron>
              <h1>What Is This Interval?</h1>
            </Jumbotron>

            <IntervalForm handleAnswer={handleAnswer}/>

          </Col>

          <Col size="m6 s12">
            <Jumbotron>
              <h1>Statistics:</h1>
            </Jumbotron>

            {/* Should be another class below, try to fix */}
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
              <li>Best Interval: <strong> {score.bestScoreInterval} </strong> --- {Math.floor(score.bestScorePercentage)}% success rate</li>
              <li>Worst Interval: <strong> {score.worstScoreInterval} </strong> --- {Math.floor(score.worstScorePercentage)}% success rate</li>
            </ul>
            
            <button className="waves-light btn indigo accent-5 lighten-1" onClick={resetUser}>
              Reset User
            </button>
          </Col>
        </Row>
      </Container>
    );
  }


export default Quiz;
