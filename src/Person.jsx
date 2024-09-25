import React from 'react'

const Person = ({image, age, name}) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img'/>
      <div>
        <h4>{name}</h4>
        <h4>{age} Years</h4>
      </div>
    </article>
  );
}

export default Person