
        import React from 'react';
        import { Row, Col } from 'antd'
        import { motion } from 'framer-motion';
        import coderSvg from './utils/svgs/codred.svg'
        import { Link } from 'react-router-dom'




        const Hero = () =>  {


          const containerVariants = {
            hidden: {
            y: '100vh',
          },
          visible: {
            y: 0,
            transition: { delay: 0.2, duration: 0.5 }
          },
          exit: {
            x: "-100vh",
            transition: { ease: 'easeInOut' }
          }
        };

            return (
                <motion.div id="hero" className='container mt-5 mb-5 d-flex flex-column h-100'
              // variants={containerVariants}
              // initial='hidden'
              // animate="visible"
              // exit="exit"
              >
            <Row >
              <Col sm={{span:24}} lg={{span:12}} md={{span:24}}>

                      <br/>
              <motion.div className="hero"
                   animate={{ x: [-1000, 100, -100, 0]}}
                   transition={{ ease: "easeOut", duration: 2 }}
               >

                <h1 className="">
                  Cutting edge solutions in<br></br>
                </h1>

                <p className=" mb-4">We are engineers and strategists. Creators of thoughtful
                 and elegant technology solutions that shape the future.

                </p>
                <Link to={"/contact"}>
                  <button className="mr-3 hero-button btn btn-primary btn-large">
                    Get Quote
                  </button>
                  </Link>


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
