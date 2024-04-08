import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import{Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='geral'>
      <div className='primario'>
        <div>
        <h2>Hello, world!!</h2>
        <p>I am a <br/>
        Web Developer.<br/>
        Welcome to my portfolio WebSite
        </p>
        </div>
        <button className='btn'>
          <Link to="/about">More about me</Link>
        </button>
        <div className='icones'>
    <a href="https://github.com/felipebart99" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="https://www.linkedin.com/in/felipe-bartolomeu-8215b425a" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://api.whatsapp.com/send?phone=5581998602739" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
    </a>
</div>

        </div>
        <div className='secundario'>
          <img src="../../img/minhafoto.jpeg" alt="foto de perfil" className='minhaFoto' />
        </div>
      
    </div>
  )
}

export default Home
