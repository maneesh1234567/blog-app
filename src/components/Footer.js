import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <>
        <Container>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <footer className="bg-dark text-white text-center py-3">
                        <p>© 2023 Your Company Name. All rights reserved.</p>
                        <p>
                            Follow us on{" "}
                            <a href="https://twitter.com" className="text-white">
                                Twitter
                            </a>{" "}
                            |{" "}
                            <a href="https://facebook.com" className="text-white">
                                Facebook
                            </a>{" "}
                            |{" "}
                            <a href="https://instagram.com" className="text-white">
                                Instagram
                            </a>
                        </p>
                    </footer>
                </Col>
            </Row>
        </Container>
        
        </>
        
    );
}
export default Footer;