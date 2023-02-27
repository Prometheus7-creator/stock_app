import Carousel from 'react-bootstrap/Carousel';
import graph from '../assets/graph.jpg';
import table from '../assets/table.jpg';
import carlos from '../assets/carlos.jpg';
import '../App.css'



const CarouselSlides = () => {
  return (
    <Carousel style={{marginTop: '3.5rem'}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block carousel-img"
          // style={{'height': '40rem', 'width': '100%'}}
          src={graph}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Start Investing</h3>
          <p>Learn With Hands On Trading Sessions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block carousel-img"
          // style={{'height': '40rem', 'width': '100%'}}
          src={table}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Research Driven Trading</h3>
          <p>Learn . Practice . Apply</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          // style={{'height': '40rem', 'width': '100%'}}
          src={carlos}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Track Your Growth</h3>
          <p>
            Plot Your Progress With Our Analytical Graphs
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlides;