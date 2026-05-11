import React from 'react'

const NewComponent = ({name,id,...user}) => {
  return (
    <div>{name}
    {/* <h1>{...user}</h1> */}
    </div>
    
  )
}

export default NewComponent