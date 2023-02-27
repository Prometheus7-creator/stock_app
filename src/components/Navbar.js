import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function NavBar() {

  const THROTTLE_DELAY = 500;

  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const debounce = (callback, delay = THROTTLE_DELAY) => {
    var time;
    return (...args) => {
      clearTimeout(time);
      time = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  const searchStock = debounce(async () =>{
    const key = keyword;

    if (keyword.trim() !== ""){
  
 await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${key}&apikey=JAARZWOLNUOZ6AI6`, {method: 'GET'})
      .then(response => response.json())
      .then(response => {setSearchResults(response['bestMatches'])})
      .catch(err => console.error(err));
}
  });

  const handleChange = (event) =>{
    const value = event.target.value;
    setKeyword(value);
    if (value === ""){
      setSearchResults([])
    }
  }

  const loginPage = () => {
    navigate("/login");
  }

  const signUpPage = () => {
    navigate("/signup");
  }

  return (
    <Navbar className="fixed-top shadow nav-bar" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Investo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}
          </Nav>
          <Form className="d-flex align-items-center flex-column">
            <Form.Control
              type="search"
              placeholder="Search any stock (E.g: TATA Motors)"
              className="me-2 search-bar"
              id="search-inp"
              aria-label="Search"
              onKeyUp={searchStock}
              value={keyword}
              onChange={handleChange}
            />
           
           {(searchResults.length>0)?
           <div className="search-results">
            {searchResults.map((val, index)=><div className='result' key={index}>
              <a href={`/search?name=${val['1. symbol']}`}>{val['2. name']}</a></div>)}
            </div>
            :null}
          </Form>
          <Button variant="light" onClick={loginPage} className="login-btn"
            >Sign in</Button>
            <Button variant="secondary" onClick={signUpPage} className="signup-btn"
            >Create account</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;