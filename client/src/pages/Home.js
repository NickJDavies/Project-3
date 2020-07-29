import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import intervals from "../Music/Intervals";
import IntervalForm from "../components/IntervalForm";

function Quiz() {
    return (
      <Container fluid>
        <Row>
          <Col size="m6 s12">
            <Jumbotron>
              <h1>Click above to Quiz!</h1>
            </Jumbotron>

          </Col>
          
          <Col size="m6 s12">
            <Jumbotron>
              <h1>*Users* Statistics:</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


export default Quiz;
