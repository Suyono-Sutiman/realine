import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap';

class Navi extends React.Component {
    state={className:'abu'};
    handleScroll=()=>{
        if (window.pageYOffset > 0) {
              this.setState({ className: "biru" });   
            }
        else{
              this.setState({ className: "abu" });
            }
        }
        componentDidMount(){
            window.addEventListener("scroll", this.handleScroll);
          }
          componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" fixed='top' className={this.state.className}>
                <Container>
            <Navbar.Brand>
                Realine.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                <Nav.Link>Development</Nav.Link>
                <Nav.Link>Marketing</Nav.Link>
                <Nav.Link >SEO</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}
export default Navi;