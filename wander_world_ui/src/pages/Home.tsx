import { Button } from "@mui/material";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import pic1 from '../assets/1.jpeg'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.jpeg'
import pic4 from '../assets/4.jpg'
import pic5 from '../assets/5.jpeg'
import communityPic from '../assets/commmunity.jpeg'
import feedPic from '../assets/feed.jpeg'
import profilePic from '../assets/profile.jpeg'
import './styles/Home.css'

function Home(): JSX.Element {
    return (
        <div>
            <Carousel className="fixed-height-carousel">
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic1} 
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic2}
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic3}
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic5}
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic4}
                />
                </Carousel.Item>
            </Carousel>

            {/* Headings */}
            <Container className="text-center my-4">
                <h1>Your Journey Begins with WanderWorld!</h1>
            </Container>

            <Container>
                <Row className="text-center">
                <Col md={4}>
                    <img
                    src={feedPic} // replace with your image path
                    alt="Unique Experience"
                    className="img-fluid mb-3"
                    />
                    <h5>More than a trip, it's a world of shared experiences</h5>
                    <Button color="primary">Feed</Button>
                </Col>
                <Col md={4}>
                    <img
                    src={communityPic}
                    alt="Community"
                    className="img-fluid mb-3"
                    />
                    <h5>Embrace the world's wonders together</h5>
                    <Button color="secondary">Community</Button>
                </Col>
                <Col md={4}>
                    <img
                    src={profilePic}
                    alt="Profile"
                    className="img-fluid mb-3"
                    />
                    <h5>Navigate the world and share your story</h5>
                    <Button color="success">Profile</Button>
                </Col>
                </Row>
            </Container>
        </div>
    );
} 

export default Home;