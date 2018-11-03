import React from 'react';


export const Card = ({name, type, teaser, Link}) => {
  return (
    <div className='card'>
    <h2 className='name'> {name} </h2>
    <h3 className='type'> {type} </h3>
    <p className='teaser'> {teaser} </p>
    <a href={Link}>Check it out on Youtube</a>
    </div>
  )
}