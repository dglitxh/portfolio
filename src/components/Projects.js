import {Row, Col } from 'antd'
import {projects} from './assets/myprojects'

const Projects = ( ) => {

    return (
        <div className="container">

        <h2 className=' mt-5 mb-3'> Projects </h2>
<Row>
{projects.map((project) => {
return(<Col xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:8}}>
        <div class="card rounded-3 mb-5 m-3 project_card">
          <div class="px-4 ">
           <a href="https://codescandy.com/geeks-bootstrap-5/index.html" rel="noreferrer" target="_blank">
           <img src={project.site} alt="pic" class="mt-n6 pt-2 img-fluid w-100 smooth-shadow-md rounded-3"/>
            </a>
          </div>
          <div class="card-body px-4 py-5 p-md-8">
            <div class="border-bottom pb-3 mb-5">
              <h3 class="mb-2 fw-bold display-5"> <a href="#slime" class="text-inherit">Course Design.</a></h3>
              <p class="lead">When setting up a site or app for your university
                or school, Geeks courses and education
                template is an ideal tool to start.</p>
            </div>
            <div class="d-flex flex-row justify-content-center">
              <a href="https://codescandy.com/geeks-bootstrap-5/index.html" target="_blank" rel="noreferrer" class="btn btn-outline-primary mx-2">
                Live demo <i class="fe fe-arrow-right"></i>

              </a>
              <a href="https://codescandy.com/geeks-bootstrap-5/index.html" target="_blank" rel="noreferrer" class="btn btn-outline-primary mx-2">
                github <i class="fe fe-arrow-right"></i>

              </a>
            </div>

          </div>
        </div>
        </Col>    )
      })
}
        </Row>
        {// <div class="row justify-content-lg-between align-items-center pb-5 pb-lg-6">
        //   <div class="col-lg-5 order-lg-2 mb-4 mb-lg-0">
        //     <h2 class="fw-normal">Photography</h2>
        //     <p class="fw-light text-light">
        //       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        //       eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //     </p>
        //     <a href="project-4.html" class="link-underline">View project</a>
        //   </div>
        //   <div class="col-lg-6 order-lg-1">
        //     <a href="project-4.html">
        //       <figure class="img-overlay">
        //         <img src="assets/img/portfolio-3.jpg" alt="Photography landing page" class="img-thumbnail" width="800" height="550"/>
        //         <div class="img-hover">
        //           <p class="img-text">View Project</p>
        //         </div>
        //       </figure>
        //     </a>
        //   </div>
        // </div>
      }
        </div>
    )
}

export default Projects
