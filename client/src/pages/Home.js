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
            <Jumbotron>
              <h1>To Start:</h1>
            </Jumbotron>
          <Col size="m6 s12">
            <h2>
              Log in
            </h2>
            <Input placeholder="Name"/>
            <Input placeholder="Password"/>
            <FormBtn>Log In</FormBtn>

          </Col>
          
          <Col size="m6 s12">
            <h2>
              Create User
              </h2>
            <Input placeholder="Name"/>
            <Input placeholder="Password"/>
            <FormBtn> Create User </FormBtn>
          </Col>
        </Row>
      </Container>
    );
  }


export default Quiz;
