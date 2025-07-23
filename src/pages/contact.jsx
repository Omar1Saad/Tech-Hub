import '../styles/contact.css'
import TechLogo from '../assets/techHub.png';


export default function Contact(){
    return(
        <>
            <div className="container-contact">
                <main className="main-contact">
                    <section>
                        <h1>Contact Tech Hub</h1>
                        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
                    </section>
                    <form action="">
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" required/>
            
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
            
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
            
                        <button type="submit">Send Message</button>
                        <p>We will get back to you as soon as possible.</p>
                    </form>
                </main>
                <footer className="footer-contact">
                    <p>&copy; 2025 Tech Hub. All rights reserved.</p>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </footer>
            </div>
        </>
    );
};