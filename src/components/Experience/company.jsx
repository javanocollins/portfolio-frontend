import React from 'react'

const Company = ({company, job_title}) => {
  return (
    <div>
      <h2>{company}</h2>
      <p>{job_title}</p>
    </div>
  )
}

export default Company;