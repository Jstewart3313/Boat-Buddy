import React, { Component } from "react";
import { connect } from "react-redux";
import "./Card.css";
import { incrementMusicAction } from "../../actionCreators/incrementMusicAction";
import { incrementMovieAction } from "../../actionCreators/incrementMovieAction";
import { incrementTvShowAction } from "../../actionCreators/incrementTvShowAction";

export const Card = ({ name, type, Link, incrementMovie, incrementTvShow, incrementMusic }) => {
  const handleClick = event => {
    const { name } = event.target;
    if (name === "movie") {
      incrementMovie(name);
    } else if (name === "show") {
      incrementTvShow(name);
    } else {
      incrementMusic(name);
    }
  };

  return (
    <div className="card">
      <a className='link' href={Link}>{name}</a>
      <button className="done" onClick={handleClick} name={type}>
        DONE
      </button>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  incrementMovie: (name) => dispatch(incrementMovieAction(name)),
  incrementMusic: (name) => dispatch(incrementMusicAction(name)),
  incrementTvShow: (name) => dispatch(incrementTvShowAction(name))
});

export default connect(undefined , mapDispatchToProps)(Card);
