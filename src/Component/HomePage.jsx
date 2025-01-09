import '../Styles/Home.css';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { fadeIn } from '../variants';
import profileImage from '../Asset/profile.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Panggil useNavigate dengan tanda kurung

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="App">
      <div className="container">
        {/*Content*/}
        <div className="content">
          <motion.div
            variants={fadeIn("right", 0.10)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text"
          >
            <h1>Welcome to My Website!</h1>
            <p>
              This is a simple website created using React JS.
              <br />
              Feel free to explore the content below.
            </p>
            <button onClick={goToAbout} className="button">
              About Me
            </button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.10)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="image"
          >
            <img src={profileImage} alt="Profile" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
