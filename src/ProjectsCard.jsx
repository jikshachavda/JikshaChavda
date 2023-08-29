import React from 'react'

const ProjectsCard = (props) => {
  return (
    <>
     <div className="card">
            <div className="img">
              <img src={props.img} alt="" srcSet="" />
            </div>
            <div className="info">
              <h2>Food website</h2>
              <p>a food website. make with {props.make}. full responsive </p>
            </div>
          </div> 
    </>
  )
}

export default ProjectsCard
