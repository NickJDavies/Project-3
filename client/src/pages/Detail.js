import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import IntervalsList from "../Music/Intervals";

const notes = ["C4", "Csharp4", "D4", "Dsharp4", "E4", "F4", "Fsharp4", "G4", "Gsharp4", "A4", "Asharp4", "B4", "C5"]
const user = {
  user: {}
};

function Detail(props) {
  const [Intervals, setIntervals] = useState({});

  const handleClick = (e) => {
    console.log(user)
    let note = notes[e.target.attributes.semitones.textContent]
    let href = "/Music/Notes/" + note + ".mp3"
  
    let C = new Audio("/Music/Notes/C4.mp3");
    let interval = new Audio(href);
  
    C.play();
    setTimeout(function(){ interval.play(); }, 1000);
  
  }

  useEffect(() => {
    getStatistics();
  }, [])

  async function getStatistics() {
    setIntervals({IntervalsList})
    user.user = await API.getUser("Nicholassss");
    // console.log(user.user.data[0].statistics.intervalScores[Interval.semiTones].correct)
    let intervals = [];
    for (let i = 0; i < IntervalsList.length; i++) {
      let interval = IntervalsList[i]
      interval.correct = user.user.data[0].statistics.intervalScores[i].correct
      console.log(interval)
      intervals.push(interval)
    }
    console.log(intervals)
    setIntervals({intervals})
  }

  // 

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1><strong>Learn About Intervals</strong></h1>
            </Jumbotron>
              <ul>
                {IntervalsList.map(Interval => (
                  <li id={Interval.semiTones}>
                      <h1>
                        {Interval.name}
                      </h1>

                      <p>{ user.user.data ? "Correct selections: " +  user.user.data[0].statistics.intervalScores[Interval.semiTones].correct  : "" }</p>
                      <p>{ user.user.data ? "Total selections: " +  user.user.data[0].statistics.intervalScores[Interval.semiTones].total  : "" }</p>
                      <p>{ user.user.data ? "Percentage Correct: " + user.user.data[0].statistics.intervalScores[Interval.semiTones].correct / user.user.data[0].statistics.intervalScores[Interval.semiTones].total * 100 + "%"  : "" }</p>
                    <button semitones={Interval.semiTones} onClick={handleClick} className="waves-light btn indigo accent-5 lighten-1"> Play Me! </button>
                    <Input placeholder="What does this interval sound like?" />
                    <FormBtn>Save</FormBtn>
                  </li>
                ))}
              </ul>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
