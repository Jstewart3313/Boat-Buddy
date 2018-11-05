import React from 'react';
import { connect } from 'react-redux';

export const Summary = (props) => {

  return (
    <div className='summary'>
      <h2>Movies: {props.movieCount} </h2>
      <h2>Music: {props.musicCount} </h2>
      <h2>Shows: {props.tvShowCount} </h2>
      <p className='how'>HOW TO PLAY: Each month their will be a new list of hot titles for you to check out, encouraging anyone on the water to stay off of social media and expand your knowledge on new movies, music and tv-shows.</p>
      <p className='invite'>Invite your friends and win challenges by keeping your watch count sky high!</p>
    </div>
  )
}

const mapStateToProps = state => ({
  movieCount: state.movieCounter,
  tvShowCount: state.tvShowCounter,
  musicCount: state.musicCounter
})

export default connect(mapStateToProps, null)(Summary);