import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <>
        <Container>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <footer className="bg-dark text-white text-center py-3">
                        <p>© 2025 om.criyaa.com, All rights reserved.</p>
                        <p>
                            Follow us on{" "}
                            <a href="https://twitter.com" className="text-white mx-2" aria-label="Twitter">
                                <FaTwitter size={22} />
                            </a>
                            <a href="https://facebook.com" className="text-white mx-2" aria-label="Facebook">
                                <FaFacebook size={22} />
                            </a>
                            <a href="https://instagram.com" className="text-white mx-2" aria-label="Instagram">
                                <FaInstagram size={22} />
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