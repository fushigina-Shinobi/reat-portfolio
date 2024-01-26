import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import KishoreCV from './KishoreCV.pdf';

const Hero = () => {
  return (
    <div className='hero' id='heroHome'>
      <section className='hero-left'>
        <div className='hero-name'>
          <span>Moshi Moshi</span>
          <span>Kishore Mongar :)</span>
          <span style={{ lineHeight: '2.5rem' }}>
            I am Kishore Mongar and my enthusiasm for continuous learning drives
            me to seek fresh challenges, enabling me to refine my skills and
            push the boundaries of what's achievable. Whether collaborating with
            a team or working independently, I'm dedicated to enhancing my
            abilities, optimizing my approach, and consistently delivering
            outstanding results. My unwavering commitment to staying at the
            forefront of the industry is fueled by a passion for continuous
            learning and professional development.
          </span>
        </div>
        <div className='action-container'>
          <button className='button hero-btn'>
            <a href={KishoreCV} download='Kishore CV'>
              Resume
            </a>
          </button>
          <section className='hero-icons'>
            <a
              href='https://www.linkedin.com/in/kishore-mongar/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/kishoremongar'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.instagram.com/thequirkybrat/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram />
            </a>
          </section>
        </div>
      </section>
      <section className='hero-right'>
        <img src={require('./Hero.png')} alt='Kishore Mongar' />
      </section>
    </div>
  );
};

export default Hero;
