import './SkillsStyles.css'
import React from 'react'

const Experience = () => {
  return (
    <div className='skills'>
        <h1 className='edu-title'>Work Experience</h1>
        <div className='card-container'>
            <div className='card'>
                <h3>Maruti Techlabs</h3>
                <span className='bar'></span>
                <p><strong>Role:</strong> Software Engineer I</p>
                <p><strong>Stack:</strong> .NET Core, Microservices, RabbitMQ</p>
                <p><strong>Duration:</strong> April 2025 to present</p>
            </div>

            <div className='card'>
                <h3>Evision IT Solutions</h3>
                <span className='bar'></span>
                <p><strong>Role:</strong> Software Engineer</p>
                <p><strong>Stack:</strong> .NET, Sitecore CMS</p>
                <p><strong>Duration:</strong> September 2023 to April 2025</p>
            </div>

            <div className='card'>
                <h3>Simform Solutions</h3>
                <span className='bar'></span>
                <p><strong>Role:</strong> Trainee Engineer</p>
                <p><strong>Stack:</strong> .NET</p>
                <p><strong>Duration:</strong> February 2023 to July 2023</p>
            </div>
        </div>
        <br /><br /><br />
    </div>
  )
}

export default Experience