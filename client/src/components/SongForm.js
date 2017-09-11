import React from 'react';

class SongForm extends React.Component {
  state = { title: '', artist: '' }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  addSong = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.title, this.state.artist, this.state.rank);
    this.setState({ question: '', answer: '' })
  }

  render() {
    return(
      <form onSubmit={this.addSong}>
        <input
          placeholder="Add A Title"
          required
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          placeholder="Add An Artist"
          required
          name="artist"
          value={this.state.artist}
          onChange={this.handleChange}
        />
        {/* <input
          placeholder="Add A Rank"
          required
          name="rank"
          value={this.state.rank}
          onChange={this.handleChange}
        /> */}
        <input className='btn green'
          type="submit"
          value="Add Song"
        />
      </form>
    )
  }
}

export default SongForm;
