import TechLogo from './assets/techHub.png';
import './layout.css';

export default function Layout({ children }) {
    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <img src={TechLogo} alt=""/>
                </div>
                <div>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/posts">Posts</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <a href="/learn">Learned</a>
                </div>
            </nav>
            {children}
        </>
    );
}