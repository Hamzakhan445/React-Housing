import React from 'react'

const Abouttext = (about) => {
    return (
        <>
        <div className="abouttext">
           <h2> {about.title}  </h2>
           <p> {about.desc} </p> 
               </div>
        </>
    )
}

export default Abouttext
