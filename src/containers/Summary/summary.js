import React from 'react';
import { connect } from 'react-redux';

export const Summary = (props) => {

  return (
    <div className='summary'>
      <h2>Movies: {props.movieCount} </h2>
      <h2>Music: {props.musicCount} </h2>
      <h2>Shows: {props.tvShowCount} </h2>
    </div>
  )
}

const mapStateToProps = state => ({
  movieCount: state.movieCounter,
  tvShowCount: state.tvShowCounter,
  musicCount: state.musicCounter
})

export default connect(mapStateToProps, null)(Summary);