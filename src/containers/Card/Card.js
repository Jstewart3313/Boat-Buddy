import React, { Component } from "react";
import { connect } from "react-redux";
import "./Card.css";
import { incrementMusicAction } from "../../actionCreators/incrementMusicAction";
import { incrementMovieAction } from "../../actionCreators/incrementMovieAction";
import { incrementTvShowAction } from "../../actionCreators/incrementTvShowAction";

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      done: false
    };
  }
  handleClick = event => {
    const { name } = event.target;
    if (this.state.done === false) {
      this.setState({ done: true });
    } else {
      this.setState({ done: false });
    }
    if (name === "movie" && !this.state.done) {
      this.props.incrementMovie(name);
    } else if (name === "show" && !this.state.done) {
      this.props.incrementTvShow(name);
    } else if (name === "music" && !this.state.done) {
      this.props.incrementMusic(name);
    }
  };
  render() {
    return (
      <div className={this.state.done ? "disabled" : "card"}>
        <div className='around-link'>
          <a
            className={this.state.done ? "link-disabled" : "link"}
            href={this.props.Link}
          >
            {this.props.name}
          </a>
        </div>
        <button
          disabled={this.state.done}
          className={this.state.done ? "done-disabled" : "done"}
          onClick={this.handleClick}
          name={this.props.type}
        >
          DONE
        </button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  incrementMovie: name => dispatch(incrementMovieAction(name)),
  incrementMusic: name => dispatch(incrementMusicAction(name)),
  incrementTvShow: name => dispatch(incrementTvShowAction(name))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
