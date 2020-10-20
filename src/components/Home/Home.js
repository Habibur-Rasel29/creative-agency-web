import React from 'react';
import './Home.css';
import slack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import airbnb from '../../images/logos/airbnb.png';
import service1 from '../../images/icons/service1.png';
import service2 from '../../images/icons/service2.png';
import service3 from '../../images/icons/service3.png';
import carousel from '../../images/carousel-1.png';
import carouse2 from '../../images/carousel-2.png';
import carouse3 from '../../images/carousel-3.png';
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';


const Home = () => {
    return (
        <div >
         <div className="site">
         <img style={{width:'5%'}} src={slack} alt=""/>
          <img style={{width:'5%'}} src={google} alt=""/>
          <img style={{width:'5%'}} src={uber} alt=""/>
          <img style={{width:'5%'}} src={netflix} alt=""/>
          <img style={{width:'5%'}} src={airbnb} alt=""/>
         </div>
         <div style={{textAlign:'center'}} className="service">
            <h1 >Provide awesome services</h1>
            </div>
          
            <div class="card-deck">
  <div class="card">
  <img style={{width:'40%'}} src={service1} alt=""/>
    <div class="card-body">
        <h6>Web & Mobile Design</h6>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quos?</p>
    </div>
  </div>
  <div class="card graphics">
    <img style={{width:'40%'}} src={service2} alt=""/>
    <div class="card-body">
    <h6>Graphics Design</h6>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quos?</p>
    </div>
  </div>
  <div class="card">
   <img style={{width:'40%'}} src={service3} alt=""/>
    <div class="card-body">
    <h6>Web Development</h6>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quos?</p>
    </div>
  </div>
</div>

<div className="work">
  <div className="work-des">
  <h5>Here are some of our work</h5>
  </div>

  <div className="work-sec">
  <img style={{width:'25%'}} src={carousel} alt=""/>
    
  
    <img style={{width:'25%'}} src={carouse2} alt=""/>
    
  
   <img style={{width:'25%'}} src={carouse3} alt=""/>
  </div>
  </div>
  <div className="client">
  <div class="row">
  <div class="col-sm-4">
    <div class="card feedback-client">
      <div class="card-body">
        <div className="feedback">
          <img src={customer1} alt=""/>
          <div className="name">
          <h5>Nash Patrick</h5>
          <h6>CEO, Manpol</h6>
          </div>
        </div>
        <div className="feedback-cmt">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio facere ex, quae nesciunt magni dicta.</p>
          </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card feedback-client">
  
      <div class="card-body">
        <div className="feedback">
          <img src={customer2} alt=""/>
          <div className="name">
          <h5>Nash Patrick</h5>
          <h6>CEO, Manpol</h6>
          </div>
        </div>
        <div className="feedback-cmt">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolore earum fuga sapiente error exercitationem!</p>
          </div>
      </div>
    
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card feedback-client">
   
      <div class="card-body">
        <div className="feedback">
          <img src={customer3} alt=""/>
          <div className="name">
          <h5>Nash Patrick</h5>
          <h6>CEO, Manpol</h6>
          </div>
        </div>
        <div className="feedback-cmt">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eum rerum doloremque quos eius delectus.</p>
          </div>
      </div>
  
    </div>
  </div>
</div>
  </div>
    
  </div>

       
    
    );
};

export default Home;