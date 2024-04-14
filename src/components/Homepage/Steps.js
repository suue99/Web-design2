import React from  'react';
import image1 from '/Users/suue/Desktop/web-design2/src/components/Homepage/Images/vecteezy_woman-pointing-at-web-browser-online-search-engine-bars_5631396.jpg';
import image2 from '/Users/suue/Desktop/web-design2/src/components/Homepage/Images/vecteezy_doctor-appointment-concept-in-flat-design_8923832.jpg'
import image3 from '/Users/suue/Desktop/web-design2/src/components/Homepage/Images/vecteezy_the-patient-is-undergoing-orthopedic-rehabilitation-with-a_24049875.jpg';
import '/Users/suue/Desktop/web-design2/src/components/Homepage/homepage.css'

function Steps () {
    return (
        <div className="steps-container">

            <div className="step">
                <h2 className='mini-heading'>Search</h2>
                <img src={image1} alt="Step 1"/> 
                <p className='step-subtitle'>Find a physiotherapist  <br/> near you with our  <br/>convenient search tool.</p>
            </div>

            <div className="step">
                 <h2 className='mini-heading'>Book</h2>
                 <img src={image2} alt="Step 2"/> 
                 <p className='step-subtitle'>Schedule an appointment  <br/> with your chosen  <br/> physiotherapist directly.</p>
            </div>

            <div className="step">
                 <h2 className='mini-heading'>Get quality care</h2>
                 <div className='div-three'> <img src={image3} alt="Step 3"/> </div> 
                 <p className='step-subtitle'>Experience top notch, <br/> personalised care  <br/> for your physical well-being.</p>
            </div>
        </div>
  
        )
       
    }

export default Steps