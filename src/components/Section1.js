import { Container, Row , Col } from "react-bootstrap";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Section1.css'; // Import Bootstrap CSS

function Section1() {
    return(
        <Container>
        <Row className="banner-row">
          <Col className="banner-main" xs={12} md={6} lg={6}>
            <h1 className="text-center my-4">Blog Posts</h1>
            <p className="banner-text">I was laid off in 2008, became an entrepreneur, and never turned back. I’m a podcaster, a YouTuber, and a start-up advisor.</p>
            <p className="banner-text">I’d love to help you grow your business to full time and beyond.</p>         
          </Col>
          <Col className="banner-image" xs={12} md={6} lg={6}>
            <img
              src='https://media.geeksforgeeks.org/gfg-gg-logo.svg'
              height='200'
              alt=''
              loading='lazy'
            />
          </Col>
        </Row>
        <Row>
            <Col xs={12} md={6} lg={6} >
                <p className="banner-text1">The newsletter designed for future entrepreneurs</p>
                <p className="banner-text2">My free Unstuck newsletter will help you break through your mental blocks, find your blind spots, and fill skill gaps — every <br/>Tuesday.</p>
            </Col>
            <Col xs={12} md={6} lg={6} className="banner2-card">
                <div>
                  <h3>
                    Join 100,000 subscribers learning to get Unstuck each week
                  </h3>
                  <Button variant="info">Info</Button>
                  <p>Free newsletter. Unsubscribe anytime.</p>
                </div>
            </Col>
        </Row>
      </Container>
    )
}
export default Section1;