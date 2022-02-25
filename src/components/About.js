import { Row, Col } from 'antd';
import { useState } from 'react';
import { skills } from './assets/data'
import { motion } from 'framer-motion'


const Services = () => {

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 4 }
    },
    exit: {
      x: "-100vw",
      transition: { ease: 'easeInOut' }
    }

};

    return (
        <motion.div id="services" className="services container mt-5 mb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="mb-4"> What I Do</h2>
      <Row className="mt-5">
      {skills.map((service) => {
        return(
          <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
            <div key={service.id} data-aos="zoom-out-down" data-aos-duration="1500" className="info-card">
              <img alt="icon" src={service.icon}/>
            <h4 className='text-xl text-sky-600'> {service.heading} </h4>
              <p class="card-text">{service.text}</p>
      </div>

      </Col>
        )
      })
     }

      </Row>



</motion.div>
    )
}


export default Services
