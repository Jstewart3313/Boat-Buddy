import React from 'react';


export const Card = ({name, type, teaser, Link}) => {
  return (
    <div>
    <h2> {name} </h2>
    <h3> {type} </h3>
    <p> {teaser} </p>
    <p> {Link}</p>
    </div>
  )
}