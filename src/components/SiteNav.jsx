import { Container, Nav, Navbar} from "react-bootstrap";

export const SiteNav = () =>
{
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
};