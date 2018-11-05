import React from "react";
import { connect } from "react-redux";
import "./Card.css";
import { incrementMusicAction } from "../../actionCreators/incrementMusicAction";
import { incrementMovieAction } from "../../actionCreators/incrementMovieAction";
import { incrementTvShowAction } from "../../actionCreators/incrementTvShowAction";

export const Card = ( props) => {
  const handleClick = event => {
    const { name } = event.target;
    if (name === "movie") {
      props.incrementMovie(name);
    } else if (name === "show") {
      props.incrementTvShow(name);
    } else {
      props.incrementMusic(name);
    }
  };

  return (
    <div className="card">
      <a className='link' href={props.Link}>{props.name}</a>
      <button className="done" onClick={handleClick} name={props.type}>
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

export default connect(null , mapDispatchToProps)(Card);
