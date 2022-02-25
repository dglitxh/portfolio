import {techStack} from './assets/data'
import { motion } from "framer-motion"



const Skills = () => {

  const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 1,
          staggerDirection: -1
        }
      }
    }

    const child = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }
    return (
        <div >
        <div className='container'>
        <h2 className=' mt-5 mb-3'> My Stack </h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className='devIcons'>

            {
              techStack.map((item) => {
                return(
                  <motion.div key="item.id" variants={child} className="iconImg">
                    <img   alt="dev_icon" src={item.icon} width='85'/>
                    <h6 className='text-center mt-1'> {item.name}</h6>
                  </motion.div>
                )
              })
            }
          </motion.div>
          </div>
        </div>
    )
}


export default Skills
