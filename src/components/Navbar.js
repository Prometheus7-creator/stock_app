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

  const searchStock = debounce(() =>{
    const key = keyword;

    if (keyword.trim() !== ""){
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '189a1b6639msheebed2040ce3668p15e63bjsn9c53a08c4837',
          'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
      }
  };
  
  fetch(`https://twelve-data1.p.rapidapi.com/symbol_search?symbol=${key}&outputsize=30`, options)
      .then(response => response.json())
      .then(response => {setSearchResults(response['data'])})
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
           
           <div style={{
            position: 'absolute',
            // height: '10rem',
            // width: '10rem',
            backgroundColor: 'white',
            marginTop: '2.1rem',
            width: '22%',
            zIndex: '1',
            maxHeight: '10rem',
            overflow: 'auto',
           }}>
            {searchResults.map((val, index)=><div className='result' key={index}>
              <a href={`/search?name=${val.symbol}`}>{val.instrument_name}</a></div>)}
            </div>
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