import React from 'react'

const TechTag = ({tag}) => {
    const {tag_name, tag_color} = tag;
    
  return (
    <div>
        <p className={` cursor-default rounded-md text-sm py-1 px-2 border-2 border-solid border-gray-700 hover:scale-105 bg-[${tag_color}] `} >{tag_name}</p>
    </div>
  )
}

export default TechTag