import './FooterStyles.css';
import { FaHome, FaMailBulk, FaLinkedin, FaTwitter, FaGithub, FaMediumM, FaFile } from 'react-icons/fa';

import React from 'react'

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <div>
                        <p>Ahmedabad, Gujarat, India.</p>
                    </div>
                </div>

                <div className='phone'>
                    <h4><FaFile size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <a href='https://drive.google.com/drive/folders/14H61BkBwAnqFic2gux7aqrwhWMluLpRl' style={{color:'#1a64c5'}} target='_blank' rel='noreferrer'>View Resume</a></h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    parthivhirani03@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>Software Engineer. Coding Enthusiastic. Always ready to learn new technologies.</p>
                <div className='social'>
                <a href='https://www.linkedin.com/in/parthiv-hirani-61a6421b8' target='_blank' rel='noreferrer'>
                <FaLinkedin size={20} style={{color:'#fff', marginRight:'2rem'}}/></a>
                <a href='https://twitter.com/parthivh1?t=ZTH1eXP108hwWPOLOwTACw&s=09' target='_blank' rel='noreferrer'>
                <FaTwitter size={20} style={{color:'#fff', marginRight:'2rem'}}/></a>
                <a href='https://github.com/parthivhirani' target='_blank' rel='noreferrer'>
                <FaGithub size={20} style={{color:'#fff', marginRight:'2rem'}}/></a>
                <a href='https://medium.com/@parthivhirani' target='_blank' rel='noreferrer'>
                <FaMediumM size={20} style={{color:'#fff', marginRight:'2rem'}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer