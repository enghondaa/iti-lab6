import React from 'react'
import './index.css'
function About() {
  return <>
        <section className='about mt-5'>
            <div className="about-container  container">
                <div className="row h-100">
                    <div className="col-md-4">
                        <h2>About Me</h2>
                    </div>
                    <div className="col-md-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis quisquam pariatur eum sapiente sunt suscipit earum omnis excepturi dolores, architecto tempore magni nihil blanditiis, consequuntur tempora reiciendis nemo nam a unde laboriosam itaque voluptatum. Libero vero facilis necessitatibus itaque sed voluptates modi. Error culpa, distinctio excepturi, eveniet quidem debitis reprehenderit alias quibusdam, atque perferendis eum itaque recusandae officia qui corrupti commodi aliquam dolore corporis! Ipsam sunt autem doloremque fugit tempora, incidunt sed labore eum voluptatum, totam quibusdam deleniti repudiandae?</p>
                        <a href="./cv.pdf" className='btn btn-success my-4' download>Download CV</a>
                    </div>
                </div>
            </div>
        </section>
  
  </>
}

export default About