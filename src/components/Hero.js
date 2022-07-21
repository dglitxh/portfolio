
        import React from 'react';
        import { Row, Col } from 'antd'
        import { motion } from 'framer-motion';
        import coderSvg from './utils/svgs/codred.svg'




        const Hero = () =>  {


        //   const containerVariants = {
        //     hidden: {
        //     y: '100vh',
        //   },
        //   visible: {
        //     y: 0,
        //     transition: { delay: 0.2, duration: 0.5 }
        //   },
        //   exit: {
        //     x: "-100vh",
        //     transition: { ease: 'easeInOut' }
        //   }
        // };

            return (
                <motion.div id="home" className='container mt-5 mb-5 d-flex flex-column h-100'
              // variants={containerVariants}
              // initial='hidden'
              // animate="visible"
              // exit="exit"
              >
            <Row >
            <Col xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:0}} >
            <div className="hero-img">
              <motion.img
                animate={{ scale: [0.2, 1.5, 1] }}
                transition={{ ease: "easeOut", duration: 2 }}
               src={coderSvg} className="img-fluid" alt="svg" loading="lazy" />
            </div>
            </Col>
              <Col sm={{span:24}} lg={{span:12}} md={{span:12}}>

                      <br/>
              <motion.div className="hero"
                   animate={{ x: [-1000, 100, -100, 0]}}
                   transition={{ ease: "easeOut", duration: 2 }}
               >

                <h1 className="big-hero">
                  Yaw<br></br><span>Deezy.</span>
                </h1>

                <p className=" mb-4">I develop fullstack Applications with Go, Python and JavaScript.

                </p>

                  <a className="mr-3 hero-button btn btn-primary btn-large" href='#projects'>
                     Projects
                  </a>



              </motion.div>
              </Col>
              <Col xs={{span:0}} sm={{span:0}} md={{span:0}} lg={{span:12}} >
              <div className="hero-img">
                <motion.img
                  animate={{ scale: [0.2, 1.5, 1] }}
                  transition={{ ease: "easeOut", duration: 2 }}
                 src={coderSvg} className="img-fluid" alt="svg" loading="lazy" />
              </div>
              </Col>
            </Row>
                </motion.div>
            )
        }


export default Hero
