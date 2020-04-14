import React from 'react';
import styled from 'styled-components';
import { Row, Container, Col, Alert } from 'react-bootstrap';

const Heading = styled(Alert)`
  margin: 10px 0 0 0;
`;

const Logo = styled.img`
  width: 128px;
  margin: 10px auto;
  text-align: center;
  display: inherit;
`;

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Heading variant="success">
            <Alert.Heading>WELCOME TO COCA COLA TRAINING TEAMS</Alert.Heading>
            <p>
              You are a great developer in this world. Please collaborate together to complete out
              mission.
            </p>
            <hr />
            <p className="mb-0">Try to take advantage of every opportunity that comes you way.</p>
          </Heading>
          <Logo src="logo512.png" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
