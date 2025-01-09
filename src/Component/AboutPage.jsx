import '../Styles/About.css';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { fadeIn } from '../variants';
import profileImage from '../Asset/profile.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate(); // Panggil useNavigate dengan tanda kurung

    const goToHome = () => {
      navigate('/');
    };

    return (
        <div className="About">
          <div className="about-container">
            {/*Content*/}
            <div className="about-content">
              <motion.div
                variants={fadeIn("right", 0.10)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="about-text"
              >
                <h1>About Me</h1>
                <p>
                My name is Reval Maulidan, a student majoring in Information Technology. I have a strong interest in technology, particularly in software development and computer programming. Through my studies, I have learned how technology can be applied to solve problems across various fields. I am always striving to grow by learning new skills and collaborating on different projects to improve my abilities. In the future, I hope to contribute to creating technological solutions that benefit society.
                </p>
                <div className="social-icons">
                  <a href="https://github.com/rvlionxz" target="_blank" rel="noopener noreferrer">
                  <FaGithub/>
                  </a>
                  <a href="mailto:rvlionxz@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope/>
                  </a>
                  <a href="https://www.instagram.com/rvlmldn/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram/>
                  </a>
                </div>
                <button onClick={goToHome} className="about-button">
                  Back To Home
                </button>
              </motion.div>
    
              <motion.div
                variants={fadeIn("left", 0.10)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="about-image"
              >
                <img src={profileImage} alt="Profile" />
              </motion.div>
            </div>
          </div>
        </div>
      );
}

export default About;