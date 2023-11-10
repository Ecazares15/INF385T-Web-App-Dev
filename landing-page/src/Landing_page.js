import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing_page.css';
import { Carousel } from 'react-bootstrap';

function Landing_page() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar" >
        <div className="container">
        <a href="#">  
          <img
                src="/WWLogo.jpg"
                alt="User Profile"
                className="logo"
                href="#"
                width="250"
                height="50"
              />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="navbar-nav ml-auto">
            <button className="btn btn-primary">Feed</button>
            <button className="btn btn-primary mr-40">Community</button>
            <div className="profile-circle">
              <img
                src="/profile.jpg"
                alt="User Profile"
                className="rounded-circle"
                width="45"
                height="45"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="container_c">
        <Carousel>
          <Carousel.Item> 
            <img
              className="d-block w-100"
              src="/carousel_img1.jpg"
              alt="Image 1"
              width="1600"
              height="500"
              
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carousel_img2.jpg"
              alt="Image 2"
              width="1600"
              height="500"
             
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carousel_img3.jpg"
              alt="Image 3"
              width="1600"
              height="500"
               
            />
          </Carousel.Item>
        </Carousel>
      </div>

    
      <div class="content">
        <p style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center', marginTop: '20px', color: 'darkblue'}}>DISCOVER, CONNECT, EXPLORE</p>
        <h style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Your Journey begins with WanderWorld!</h>
      </div>

    <div class="tiles">
        <div class="tile">
         
          <p style={{ backgroundColor: 'rgba(128, 0, 0, 0.5)',  color: 'white', padding: '10px', margin: 0, borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>It is a world of shared Experiences</p>
          <img src="/feed.jpg" alt="Tile 1 Image" />
            <div>
              <button class="tile-button-feed" href="link1.html" style={{ backgroundColor: 'rgba(128, 0, 0, 0.5)',  color: 'white', fontWeight: 'bold'}}>  FEED  </button>
            </div>
      </div>
 
      <div class="tile">
        
        <p style={{ backgroundColor: 'rgba(0, 0, 128, 0.5)', color: 'white', padding: '10px', margin: 0, borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>Embrace the World's Wonders together</p>
        <img src="/comm.jpg" alt="Tile 2 Image" />
        
        <div>
          <button class="tile-button-comm" href="link2.html" style={{ backgroundColor: 'rgba(0, 0, 128, 0.5)', color: 'white', fontWeight: 'bold'}}>  COMMUNITY  </button>
        </div>
       </div>
  
      <div class="tile">
        
        <p style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'white', padding: '10px', margin: 0, borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>Navigate the World and share your story</p>
        
        <img src="/profileimg.jpg" alt="Tile 3 Image" />
        <br>
        </br>
        <div>
          <button class="tile-button-profile" href="link3.html" style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'white', fontWeight: 'bold'}}>  PROFILE  </button>
        </div>
      </div>
</div>

    


    <div class="footer">
        
          <p>&copy; 2023 WanderWorld LLC | All rights reserved.</p>
        
      </div>

    </div>
  );
}


export default Landing_page;
