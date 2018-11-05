import React, { Component } from "react";
import { connect } from "react-redux";

import { movieAction } from "../../actionCreators/movie";
import { musicAction } from "../../actionCreators/music";
import { tvShowAction } from "../../actionCreators/tvShow";
import { Summary } from '../Summary/summary'
import * as API from "../../util/helper/helper";
import { Card } from '../Card/Card';
import './CardContainer.css';

export class CardContainer extends Component {
  componentDidMount = async () => {
    const initialMovieData = await API.getMovie("deadpool");
    const initialMusicData = await API.getMusic("redhotchilipeppers");
    const initialTvShowData = await API.getTv("discovery");
    this.props.onLoadTvShow(initialTvShowData);
    this.props.onLoadMovies(initialMovieData);
    this.props.onLoadMusic(initialMusicData);
  };

  render() {
    const { movies, music, tvShow } = this.props;
    const movieInfo = movies.map( movie => {
      return <Card className='movie-card' {...movie} />
    });
    const musicInfo = music.map( music => {
      return <Card className='music-card' {...music} />
    });
    const TvShowInfo = tvShow.map(show => {
      return <Card className='tv-card' {...show} />
    });
    return (
      <div className='container'>
        < Summary />
        <div className='music-container small-container'>
          <h2 className='titles'>MUSIC</h2>
          { musicInfo }
        </div>
        <div className='movie-container small-container'>
          <h2 className='titles'>MOVIES</h2>
          { movieInfo }
        </div>
        <div className='tv-container small-container'>
          <h2 className='titles'>SHOWS</h2>
          { TvShowInfo }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  music: state.music,
  tvShow: state.tvShow
});

export const mapDispatchToProps = dispatch => ({
  onLoadMovies: movies => dispatch(movieAction(movies)),
  onLoadMusic: music => dispatch(musicAction(music)),
  onLoadTvShow: tvShow => dispatch(tvShowAction(tvShow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
