import React from 'react'

import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <div className="line">
                <h4 style={{ color: '#3A72B7' }}>Mcq Of The Day</h4>
                <h6 style={{ color: '#3A72B7' }}>Topic Summery</h6>
                
                <svg style={{ width: '22px',color: '#3A72B7' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>


            <div className="box1">
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className="d-flex box2">
                <div className="line1">
                    <p>A</p>
                </div>
                <p className="para">2000 years Old</p>
            </div>
            <div className="d-flex box2">
                <div className="line1">
                    <p>B</p>
                </div>
                <p className="para">45 BC, Make it Over </p>
            </div>
            <div className="d-flex box2">
                <div className="line1">
                    <p>C</p>
                </div>
                <p className="para">Lorem gimpk kollp ral</p>
            </div>
            <div className="d-flex box2">
                <div className="line1">
                    <p>D</p>
                </div>
                <p className="para">Kap hara rama hweo</p>
            </div>
        </div>
    )
}

export default Home
