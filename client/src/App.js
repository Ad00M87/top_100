import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import axios from 'axios';


class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get('/api/songs')
      .then( res => this.setState({ songs: res.data }) )
  }


  addSong = (title, artist, rank) => {
    let song = { title, artist, rank }
    axios.post('/api/songs', song)
      .then( res => {
        const { songs } = this.state;
        this.setState({ songs: [...songs, res.data] })
      })
  }

  updateSong = (id) => {
    axios.put(`/api/songs/${id}`)
     .then( res => {
       const songs = this.state.songs.map( s => {
         if (s.id === id)
           return res.data
         return s
       });

        this.setState({ songs });
      })
  }

  deleteSong = (id) => {
    axios.delete(`/api/songs/${id}`)
      .then( () => {
        const { songs } = this.state;
        this.setState({ songs: songs.filter( s => s.id !== id ) })
      })
  }




  render() {
    return (
      <div className="container">
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}

export default App;
