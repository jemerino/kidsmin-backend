import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './mainView.css';

function MainView() {
    return (
      <Container fluid className="backgroundContainer">
         <Row>
             <Col sm={2}></Col>
             <Col sm={8}>
                 <Row>
                     <Col sm={1}></Col>
                     <Col sm={2}>Home</Col>
                     <Col sm={2}>Create</Col>
                     <Col sm={2}>Edit</Col>
                     <Col sm={2}>Delete</Col>
                     <Col sm={2}>Attendance</Col>
                     <Col sm={1}></Col>
                 </Row>
             </Col>
             <Col sm={2}></Col>
         </Row>
         <Row>
             <Col sm={2}></Col>
             <Col sm={8}>
                 <Row>
                     <Col sm={12} className="text-center mt-5 customCol">
                        <h1 className="mt-3">Main Content Box</h1>
                     </Col>
                 </Row>
             </Col>
             <Col sm={2}></Col>
         </Row>
      </Container>
    );
  }
  
  export default MainView;