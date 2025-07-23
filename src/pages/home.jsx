import { useEffect, useState } from 'react'
import TechLogo from '../assets/techHub.png'
import AppLogo from '../assets/undraw_app-dark-mode_6ji2.png'
import CommunityLogo from '../assets/undraw_online-community_3o0l.png'
import WebLogo from '../assets/undraw_web-app_141a.png'
import '../styles/home.css'

const Home = function() {
    return(
    <>
    <div className="container-home">

        <header className='header-home'>
            <h2>Welcome To Tech Hub</h2>
            <p>Your Gateway To Technology Learned</p>
            <a href="#">Join Tech Hub</a>
        </header>
        <main className='main-home'>
            <article>
                <img src={WebLogo} alt=""/>
                <h3>Courses</h3>
                <p>Learn programing and tech skills</p>
            </article>
            <article>
                <img src={CommunityLogo} alt=""/>
                <h3>Project</h3>
                <p>Learn programing and tech skills</p>
            </article>
            <article>
                <img src={AppLogo} alt=""/>
                <h3>Community</h3>
                <p>Learn programing and tech skills</p>
            </article>
        </main>
        <footer className='footer-home'>
            <nav>
                <a href="#">About</a>
                <a href="#">Courses</a>
                <a href="#">Contact</a>
            </nav>
            <p>&copy; 2025 Tech Hub</p>
        </footer>
    </div>
    </>
    )
}

export default Home