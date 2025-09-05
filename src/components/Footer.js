import { Container } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3" style={{ width: '100%', marginTop: '2rem' }}>
            <Container>
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
            </Container>
        </footer>
    );
}
export default Footer;