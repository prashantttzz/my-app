import React from 'react'

const NewComponent = ({name,id,...user}) => {

  return (
    <div>
      <h2>{name}</h2>
      {name==="prashant"?"welcome prashant":"who are you?"}
      {/* ternary operator */}
      <p>{name && `heelo ${name}`}</p>
      {/* conditionally rendering  */}
      <p>{name ??"prashant"}</p>
      {/* nullish provide a feedback if null or undefined */}

    </div>
    
  )
}

export default NewComponent