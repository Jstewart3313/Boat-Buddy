import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import "./summary.css";

export const Summary = props => {
  return (
    <div className="summary">
      <div className="counters">
        <h2 className="movie-count one-count">Movies: {props.movieCount}</h2>
        <h2 className="music-count one-count">Music: {props.musicCount}</h2>
        <h2 className="show-count one-count">Shows: {props.tvShowCount}</h2>
      </div>
      <p className="how">
        HOW TO PLAY: Each month their will be a new list of hot titles for you
        to check out, encouraging anyone on the water to stay off of social
        media and expand your knowledge on new movies, music and tv-shows.
      </p>
      <p className="invite">
        Invite your friends and win challenges by keeping your watch count sky
        high!
      </p>
    </div>
  );
};

export const mapStateToProps = state => ({
  movieCount: state.movieCounter,
  tvShowCount: state.tvShowCounter,
  musicCount: state.musicCounter
});

Summary.propTypes = {
  movieCount: PropTypes.number,
  tvShowCount: PropTypes.number,
  musicCount: PropTypes.number
}

export default connect(
  mapStateToProps,
  null
)(Summary);
