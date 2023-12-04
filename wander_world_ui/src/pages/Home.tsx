import { Button, Typography, colors } from "@mui/material";
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
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {

    let navigate = useNavigate()

    const goToProfile = () => {
        navigate('/profile')
    }

    const goToFeed = () => {
        navigate('/feed')
    }

    const goToCommunity = () => {
        navigate('/community')
    }

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
                    <Typography variant="h6" color="primary">Join a world of shared experiences</Typography>
                    <img
                    src={feedPic} 
                    alt="Feed"
                    className="img-fluid mb-3 category-img"
                    />
                    <Button color="primary" onClick={goToFeed}>Feed</Button>
                </Col>
                <Col md={4}>
                    <Typography variant="h6" color="secondary">Embrace the world's wonders together</Typography>
                    <img
                    src={communityPic}
                    alt="Community"
                    className="img-fluid mb-3 category-img"
                    />
                    <Button color="secondary" onClick={goToCommunity}>Community</Button>
                </Col>
                <Col md={4}>
                    <Typography variant="h6" style={{ color: colors.green[800]}}>Navigate the world and share your story</Typography>
                    <img
                    src={profilePic}
                    alt="Profile"
                    className="img-fluid mb-3 category-img"
                    />
                    <Button color="success" onClick={goToProfile}>Profile</Button>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;