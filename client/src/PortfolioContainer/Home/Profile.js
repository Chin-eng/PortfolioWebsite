import React from 'react';
import Typical from "react-typical";
import "../../index.css";
import './Profile.css';
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                        <a href = "https://www.facebook.com/chinerdene.gantulga/">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href = "#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href = "https://www.instagram.com/chineehuu/">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href = "#">
                            <i className='fa fa-youtube'></i>
                        </a>
                        <a href = "#">
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>
                    
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Chin-Erdene</span>

                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop = {Infinity}
                                steps = {[
                                    "Student 🧠",
                                    1000,
                                    "Majoring in CS 💻",
                                    1000,
                                    "Here is my portfolio webiste 😁",
                                    1000,
                                    "Cross Platform v 🤌",
                                    1000,
                                    "React/Gatsby.Js Dev 👨‍💻",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                 Building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className=' profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href="ChinResume.pdf" download='Chin-Erdene.Resume.pdf'>
                                <button className="btn  highlighted-btn"> Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}