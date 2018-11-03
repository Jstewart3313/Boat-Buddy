import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieAction } from '../../actionCreators/movie';
import { musicAction } from '../../actionCreators/music';
import { tvShowAction } from '../../actionCreators/tvShow';

import * as API from '../../util/helper/helper';


export class CardContainer extends Component {
  
  
  componentDidMount = async () => {
      const initialMovieData = await API.getMovie('deadpool')
      const initialMusicData = await API.getMusic('redhotchilipeppers')
      const initialTvShowData = await API.getTv('discovery')
      this.props.onLoadTvShow(initialTvShowData)
      this.props.onLoadMovies(initialMovieData)
      this.props.onLoadMusic(initialMusicData)
  }



  render() {
    return(
      <div>
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  movies: state.movies,
  music: state.music,
  tvShow: state.tvShow
})

export const mapDispatchToProps = dispatch => ({
  onLoadMovies: movies => dispatch(movieAction(movies)),
  onLoadMusic: music => dispatch(musicAction(music)),
  onLoadTvShow: tvShow => dispatch(tvShowAction(tvShow))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);