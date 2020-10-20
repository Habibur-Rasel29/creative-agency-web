import React from 'react';
import Frame from '../../images/logos/Frame.png';
import './Body.css';

const Body = () => {
    return (
        <div className="row ">
            
            <div className="col-md-4">
                <h1>Let's Grow Your Brand To The Next Level </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa nemo voluptas. Aliquam dignissimos magni placeat fuga quibusdam recusandae quas.</p>
                <br/>
                <button>Hire us</button>
            </div>
            <div className="col-md-7 body-col">
                <img style={{width:'80%'}} src={Frame} alt=""/>
            </div>
            
        </div>
    );
};

export default Body;